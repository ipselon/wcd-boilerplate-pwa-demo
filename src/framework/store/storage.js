/*
 *    Copyright 2019 Alex (Oleksandr) Pustovalov
 *
 *    Licensed under the Apache License, Version 2.0 (the "License");
 *    you may not use this file except in compliance with the License.
 *    You may obtain a copy of the License at
 *
 *        http://www.apache.org/licenses/LICENSE-2.0
 *
 *    Unless required by applicable law or agreed to in writing, software
 *    distributed under the License is distributed on an "AS IS" BASIS,
 *    WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 *    See the License for the specific language governing permissions and
 *    limitations under the License.
 */

import localforage from 'localforage';

let storageInstance;

export function initStorage() {
  localforage.config({
    name: 'wcdDemoApp'
  });
}

export function getStorageInstance() {
  if (!storageInstance) {
    initStorage();
    storageInstance = localforage.createInstance({
      name: 'commonStorage',
    });
  }
  return storageInstance;
}

export async function getSchema() {
  return getStorageInstance().getItem('schema');
}

export async function saveSchema(schema) {
  return getStorageInstance().setItem('schema', schema);
}

export async function getSettings() {
  return getStorageInstance().getItem('settings');
}

export async function saveSettings(settings) {
  return getStorageInstance().setItem('settings', settings);
}

// export async function setRecordOfComponentPropsKeys(projectKey, expandedResourcesKeys) {
//   return getStorageInstance().getItem(STORAGE_RECORD_EXPANDED_COMPONENT_PROPS_KEYS)
//     .then(recordOfExpandedKeys => {
//       recordOfExpandedKeys = recordOfExpandedKeys || {};
//       recordOfExpandedKeys[projectKey] = expandedResourcesKeys;
//       return getStorageInstance().setItem(STORAGE_RECORD_EXPANDED_COMPONENT_PROPS_KEYS, recordOfExpandedKeys);
//     });
// }
//
// export async function getRecordOfComponentPropsKeys(projectKey) {
//   return getStorageInstance().getItem(STORAGE_RECORD_EXPANDED_COMPONENT_PROPS_KEYS)
//     .then(recordOfExpandedKeys => {
//       recordOfExpandedKeys = recordOfExpandedKeys || {};
//       return recordOfExpandedKeys[projectKey]
//     });
// }
