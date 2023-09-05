/* ErrorWithStatus interface extends Error to add a 'status' property,
allowing us to include a status code in our error objects 
and preventing TS from throwing errors about 'status' not existing on Error */
export interface ErrorWithStatus extends Error {
  status?: number;
}
