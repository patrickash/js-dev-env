/* eslint-disable no-unused-vars */

/**
 * This file contains references to the vendor libraries
 * we use in the project. Webpack only uses this in the
 * production build.
 *
 * We split out third-party vendor libraries and write
 * them here because they are less likely to change as
 * often as application code. This avoids forcing people
 * to download a huge JS file every time we change
 * a line of code in the application.
 *
 * Ex. React, Angular, jQuery, Bootstrap, etc.
 *
 * Any files that aren't referenced here will be bundled
 * into main.js for the production build.
 */

import { fetch } from "whatwg-fetch";
