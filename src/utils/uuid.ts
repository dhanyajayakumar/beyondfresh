import { v4 as uuidv4 } from 'uuid';

const UUID_KEY = 'app_uuid';

export const getUUID = (): string => {
  let uuid = localStorage.getItem(UUID_KEY);
  if (!uuid) {
    uuid = uuidv4();
    localStorage.setItem(UUID_KEY, uuid);
  }
  return uuid;
};