import HTTPClient from "./HTTPClient";

export const stringToDate = (dateString?: string) => {
  if (!dateString) return null;
  const dateInt = tryParseInt(dateString);
  return !dateInt || dateInt === -1 ? null : new Date(dateInt);
};

export const tryParseInt = (intAsStr?: string) => {
  if (!intAsStr) return null;
  try {return parseInt(intAsStr)} catch { }
  return null;
};

export const isResultError = (res: any, isNullable: boolean = false) =>
  !(res[1] >= 200 && res[1] <= 299) || (!isNullable && !res[0]);

export const awaitAll = async <T>(promises?: Promise<T>[]): Promise<T[]> => {
  if (!promises) return [];
  const results: any[] = [];
  if (promises) {
    for (const promise of promises)
      results.push(await promise);
  }
  return results;
}

// https://stackoverflow.com/questions/105034/how-do-i-create-a-guid-uuid
export const newUuid = () => {
  return "10000000-1000-4000-8000-100000000000".replace(/[018]/g, (c: any) =>
    (c ^ crypto.getRandomValues(new Uint8Array(1))[0] & 15 >> c / 4).toString(16)
  );
}

export const ApiClient = new HTTPClient(process.env.API_ADDR!, { "X-Api-Key": process.env.API_KEY! });