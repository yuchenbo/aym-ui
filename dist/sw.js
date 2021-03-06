importScripts('workbox-sw.prod.v2.1.3.js');

/**
 * DO NOT EDIT THE FILE MANIFEST ENTRY
 *
 * The method precache() does the following:
 * 1. Cache URLs in the manifest to a local cache.
 * 2. When a network request is made for any of these URLs the response
 *    will ALWAYS comes from the cache, NEVER the network.
 * 3. When the service worker changes ONLY assets with a revision change are
 *    updated, old cache entries are left as is.
 *
 * By changing the file manifest manually, your users may end up not receiving
 * new versions of files because the revision hasn't changed.
 *
 * Please use workbox-build or some other tool / approach to generate the file
 * manifest which accounts for changes to local files and update the revision
 * accordingly.
 */
const fileManifest = [
  {
    "url": "document.html",
    "revision": "1033bf29cd0000372863c0a404832100"
  },
  {
    "url": "examples.html",
    "revision": "d169497f560a6845fdb7092fa2e182fb"
  },
  {
    "url": "static/css/document.57c7da827cab98f2f3fa034d471287d6.css",
    "revision": "45fd85870a5c2e081f460a5c0764d38c"
  },
  {
    "url": "static/css/examples.43f1c8b9af4481de72a5cf78d818e0dc.css",
    "revision": "f577245be24abc76d0706ac0ab6d5328"
  },
  {
    "url": "static/js/0.a2c9862.js",
    "revision": "625b156302289473191be70468cbabeb"
  },
  {
    "url": "static/js/1.d0a8021.js",
    "revision": "55848bbd1d47c3d83f861c3aad9707ae"
  },
  {
    "url": "static/js/10.5f861a1.js",
    "revision": "d1b20de22a362bb58aafaf3f6b9b6cb8"
  },
  {
    "url": "static/js/11.3caf64b.js",
    "revision": "2a62670479012d03f46519678556e8ad"
  },
  {
    "url": "static/js/12.013701f.js",
    "revision": "1efe1c508549d663c3507ad6aec97aa1"
  },
  {
    "url": "static/js/13.ec7c371.js",
    "revision": "0911e2ae1456011c062884c4bd8a9f90"
  },
  {
    "url": "static/js/14.eef26c1.js",
    "revision": "77d0aa4a3de8fbdcb5b988db6d70d9b3"
  },
  {
    "url": "static/js/15.a2f8d81.js",
    "revision": "3dca9ef4ed9c7c657d9a24ed6c6f4807"
  },
  {
    "url": "static/js/16.4e6bc5a.js",
    "revision": "0abb59249aa2d6f46548733a71adbfb9"
  },
  {
    "url": "static/js/17.9bc2f10.js",
    "revision": "c204a19c4e706119a1ac496c90b2ece8"
  },
  {
    "url": "static/js/18.b45f042.js",
    "revision": "2721ee3c3d384c7e6b88e92b61a7bc57"
  },
  {
    "url": "static/js/19.555406f.js",
    "revision": "7bf332b1c626546e34117e2e645dd913"
  },
  {
    "url": "static/js/2.fb90f00.js",
    "revision": "cf3390856e417314deb35b2f6c447ab2"
  },
  {
    "url": "static/js/20.6d61e1f.js",
    "revision": "0b326b19b673e406f8e8a7857131a6c0"
  },
  {
    "url": "static/js/3.17f2605.js",
    "revision": "8bc48f8367328c395b94ffb5e42b0140"
  },
  {
    "url": "static/js/4.38fa997.js",
    "revision": "9f086e1f0eb5d69e415ae012cb189740"
  },
  {
    "url": "static/js/5.327eb28.js",
    "revision": "afe1ce8c10e2eed0e8ff7c2a75eeafca"
  },
  {
    "url": "static/js/6.8e1f496.js",
    "revision": "991c131aca29ca41409d3576ab321582"
  },
  {
    "url": "static/js/7.e4191cd.js",
    "revision": "e35235dd3a13b7c34805baa69287f7ef"
  },
  {
    "url": "static/js/8.f3c75d4.js",
    "revision": "f24ecc34cc71ea0940fe4f39ce98a58f"
  },
  {
    "url": "static/js/9.cd9e7a0.js",
    "revision": "56784f81bdbc4bd0db42b8cfd9ef6b26"
  },
  {
    "url": "static/js/document.786506c.js",
    "revision": "0762cef238bb033bf7dcbae98d8e7b1d"
  },
  {
    "url": "static/js/examples.509d34f.js",
    "revision": "53469d0da43f1b33a60f39361df5fde2"
  },
  {
    "url": "static/js/manifest.57a6a53.js",
    "revision": "dc7bec9c31a33349307d1cc7bfdb66ad"
  },
  {
    "url": "static/js/vendor.13d250c.js",
    "revision": "264b0bd8d255d127fcd817303525b41b"
  }
];

const workboxSW = new self.WorkboxSW({
  "skipWaiting": true,
  "clientsClaim": true
});
workboxSW.precache(fileManifest);
