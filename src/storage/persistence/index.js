import { nanoid } from "nanoid";

import { getStorage, setStorage } from "ExtensionServices/storage-service";

export const create = async (item) => {
  const id = nanoid(10);
  const data = await getStorage();
  data[id] = { id, text: item };

  await setStorage(data);
};

export const read = async (id) => {
  const data = await getStorage();
  return data[id];
};

export const readAll = async () => {
  return await getStorage();
};

export const update = async (item) => {
  const { id } = item;
  const data = getStorage();
  data[id] = item;

  await setStorage(data);
};

export const remove = async (id) => {
  const data = getStorage();
  const newData = { ...data };
  delete newData[id];

  await setStorage(newData);
};
