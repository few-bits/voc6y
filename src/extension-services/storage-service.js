import { STORAGE_NAMESPACE } from "../constants";

export const getStorage = async () =>
  new Promise((resolve, reject) => {
    chrome.storage.local.get([STORAGE_NAMESPACE], (result) => {
      const { lastError } = chrome.runtime;
      if (lastError) {
        reject(lastError);
      }

      resolve(
        result[STORAGE_NAMESPACE] ? JSON.parse(result[STORAGE_NAMESPACE]) : {}
      );
    });
  });

export const setStorage = async (data) =>
  new Promise((resolve, reject) => {
    const rawData = JSON.stringify(data);
    chrome.storage.local.set({ [STORAGE_NAMESPACE]: rawData }, () => {
      const { lastError } = chrome.runtime;
      if (lastError) {
        reject(lastError);
      }

      resolve();
    });
  });

export const clearStorage = async () =>
  new Promise((resolve, reject) => {
    chrome.storage.local.remove([STORAGE_NAMESPACE], () => {
      const { lastError } = chrome.runtime;
      if (lastError) {
        reject(lastError);
      }

      resolve();
    });
  });
