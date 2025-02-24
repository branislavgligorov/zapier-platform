const os = require('os');
const path = require('path');
const semver = require('semver');
const versionStore = require('./version-store');

const DEBUG = (process.env.ZAPIER_DEBUG || 'false') === 'true';

const BASE_ENDPOINT = process.env.ZAPIER_BASE_ENDPOINT || 'https://zapier.com';
const API_PATH = '/api/platform/cli';
const ENDPOINT = process.env.ZAPIER_ENDPOINT || BASE_ENDPOINT + API_PATH;
const STARTER_REPO =
  process.env.ZAPIER_STARTER_REPO || 'zapier/zapier-platform-example-app';
const AUTH_LOCATION_RAW = '~/.zapierrc';
const AUTH_LOCATION =
  process.env.ZAPIER_AUTH_LOCATION || path.resolve(os.homedir(), '.zapierrc');
const CURRENT_APP_FILE = process.env.ZAPIER_CURRENT_APP_FILE || '.zapierapprc';
const PLATFORM_PACKAGE = 'zapier-platform-core';
const BUILD_DIR = 'build';
const DEFINITION_PATH = `${BUILD_DIR}/definition.json`;
const BUILD_PATH = `${BUILD_DIR}/build.zip`;
const SOURCE_PATH = `${BUILD_DIR}/source.zip`;
const BLACKLISTED_PATHS = [
  // Will be excluded from build.zip and source.zip
  '.git',
  '.env',
  '.environment',
  'build'
];
const nodeVersion = semver.Comparator(
  versionStore[versionStore.length - 1].nodeVersion
).semver.version;
const LAMBDA_VERSION = `v${nodeVersion}`;
const AUTH_KEY = 'deployKey';
const PACKAGE_VERSION = require('../package.json').version;
const UPDATE_NOTIFICATION_INTERVAL = 1000 * 60 * 60 * 24 * 7; // one week

module.exports = {
  API_PATH,
  AUTH_KEY,
  AUTH_LOCATION,
  AUTH_LOCATION_RAW,
  BASE_ENDPOINT,
  BUILD_DIR,
  BUILD_PATH,
  SOURCE_PATH,
  BLACKLISTED_PATHS,
  CURRENT_APP_FILE,
  DEBUG,
  DEFINITION_PATH,
  ENDPOINT,
  LAMBDA_VERSION,
  PACKAGE_VERSION,
  PLATFORM_PACKAGE,
  STARTER_REPO,
  UPDATE_NOTIFICATION_INTERVAL
};
