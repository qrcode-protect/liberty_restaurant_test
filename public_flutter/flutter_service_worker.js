'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';
const RESOURCES = {
  "version.json": "2198193e23b11cfd791da53df2b7ba64",
"index.html": "c4a491f939802a1142652b3dc9640b71",
"/": "c4a491f939802a1142652b3dc9640b71",
"main.dart.js": "3147968abe0707fbcbb904795d0da593",
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"manifest.json": "a595095f4190a442301d3c46910cf0b3",
"assets/AssetManifest.json": "bddec9621717c4f486a70a070700a319",
"assets/NOTICES": "bbd107e19ac51dac56df3c6f0bd7602f",
"assets/FontManifest.json": "bbc016be8b6ed6af3e32bb55fd51882d",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "6d342eb68f170c97609e9da345464e5e",
"assets/packages/font_awesome_flutter/lib/fonts/fa-solid-900.ttf": "ffed6899ceb84c60a1efa51c809a57e4",
"assets/packages/font_awesome_flutter/lib/fonts/fa-regular-400.ttf": "eaed33dc9678381a55cb5c13edaf241d",
"assets/packages/font_awesome_flutter/lib/fonts/fa-brands-400.ttf": "3241d1d9c15448a4da96df05f3292ffe",
"assets/packages/flutter_google_places/assets/google_white.png": "40bc3ae5444eae0b9228d83bfd865158",
"assets/packages/flutter_google_places/assets/google_black.png": "97f2acfb6e993a0c4134d9d04dff21e2",
"assets/packages/eva_icons_flutter/lib/fonts/evaicons.ttf": "b600c99b39c9837f405131463e91f61a",
"assets/fonts/MaterialIcons-Regular.otf": "4e6447691c9509f7acdbf8a931a85ca1",
"assets/assets/logo16.png": "3bfce8c4101289726b63d901ece52c83",
"assets/assets/food5.jpeg": "a9fac937c06ea8979573dda27825d17d",
"assets/assets/logo17.png": "4bdcb1bf1e9d443eb15845f19a94f215",
"assets/assets/voiture-vtc.jpg": "60a2dabc8d4a004c991225375352de8f",
"assets/assets/food9.jpeg": "4bda91d110e4861e03ccd6856864a73a",
"assets/assets/logo15.png": "d2c3d73908ee9e582ec07471b2c7940b",
"assets/assets/logo14.png": "d5009492fbdb4ea294c6f8169aec3387",
"assets/assets/food8.jpeg": "65221fbb33600b0c293d8109e5bd7146",
"assets/assets/logo13.png": "fb2917261068504bf667d132c629dfaa",
"assets/assets/food4.jpeg": "395dd3a2b2481c408794cc120760be16",
"assets/assets/logo12.png": "627ad47e5815f37ed0529a32ab16b2c3",
"assets/assets/moto4.jpg": "a53d5ed9972dd8c7cfd337a30d5912d1",
"assets/assets/food3.jpeg": "17bddc4e929f84741bb4697c395f4630",
"assets/assets/moto3.jpg": "ccb7ff63003b7bf36d2988ee3c870c46",
"assets/assets/coif1.jpg": "7400ea9e578d56326a28e96f5860c8c8",
"assets/assets/salonCoif.jpg": "a557b24f8830ef01601c62ed48853033",
"assets/assets/moto2.jpg": "cdb3ed210e96ebb71247d060e356db30",
"assets/assets/food2.jpeg": "957bd60e51795c367ff6d603ff83eb76",
"assets/assets/coif2.jpg": "8de6c2eb61db663e489ffe11c9623524",
"assets/assets/coif3.jpg": "a70596349e641f929125bb43ea059b95",
"assets/assets/moto1.jpg": "14926971305551af3dc2e778fa6df62d",
"assets/assets/vtc3.jpeg": "bae685a04b5d865d9a316dbda6ed7cf2",
"assets/assets/food10.jpeg": "a10f0eabd4bc5199e861ff80e9da0a50",
"assets/assets/brico4.jpg": "04f9ceb34b24273f0091eb5313bdff7a",
"assets/assets/restauration.jpg": "df0f6cc45cde8d5d1c0c674d17e984be",
"assets/assets/food1.jpeg": "9247524e449e53f1cadce95a521456fc",
"assets/assets/auto4.jpg": "ef7e78f0d8221070e01592ce39ba5723",
"assets/assets/logo.png": "eb207563eb31ca06c18fa8dcdd87c868",
"assets/assets/brico1.jpg": "481472cfca29f8b7ccabfcc5dd23c000",
"assets/assets/auto1.jpg": "f25736d6aa38f8e8875223855f519191",
"assets/assets/brico2.jpg": "30ba45f201b6cbdc6b1a93ef4bad37a1",
"assets/assets/food11.jpeg": "439bf059b13ea65f1368e58b106797fb",
"assets/assets/profile.png": "1871862d87bb8037d953317fb4497189",
"assets/assets/auto3.jpg": "ad4e243af59bf5037c6915ac1866bcc9",
"assets/assets/auto2.jpg": "65a8d8b82b18d8c4cece3bfca104b59a",
"assets/assets/brico3.jpg": "7a0d79fa429c943d49a72a84c1b63c6c",
"assets/assets/food12.jpg": "5251b664214e80d616708cca5d2daf11",
"assets/assets/liv6.jpg": "0956092f9c52ed07b4069bee05b25801",
"assets/assets/food7.jpeg": "343b604159f65c2ebdfc222dde0a56c7",
"assets/assets/liv4.jpg": "9e1a5021c427e68ba2fc1de07d39e92d",
"assets/assets/liv5.jpg": "90bd36400bf8df933f52e21dd263a899",
"assets/assets/fonts/Montserrat-Light.ttf": "409c7f79a42e56c785f50ed37535f0be",
"assets/assets/fonts/Montserrat-Bold.ttf": "ade91f473255991f410f61857696434b",
"assets/assets/fonts/FontsFree-Net-Lastica.ttf": "9979b86fee2ad9565a084d09c148af8f",
"assets/assets/vtc2.jpg": "c0c376b91c3341a27c3bae1a04988123",
"assets/assets/liv1.jpg": "922b9897c7e594fd8f8743e643014943",
"assets/assets/logo18.png": "49f77fdfdd0475df22a6568afb69617b",
"assets/assets/vtc1.jpg": "755152ed00846a326ccce011f14acbb0",
"assets/assets/food6.jpeg": "4b2b09b3ba8bd59e396c5df21bdaacbe",
"assets/assets/liv2.jpg": "18d1f4d134c0a4df9b8bcb10236d224b",
"assets/assets/liv3.jpg": "a614135309beca00ae87d260fdb7b4dc"
};

// The application shell files that are downloaded before a service worker can
// start.
const CORE = [
  "/",
"main.dart.js",
"index.html",
"assets/NOTICES",
"assets/AssetManifest.json",
"assets/FontManifest.json"];
// During install, the TEMP cache is populated with the application shell files.
self.addEventListener("install", (event) => {
  self.skipWaiting();
  return event.waitUntil(
    caches.open(TEMP).then((cache) => {
      return cache.addAll(
        CORE.map((value) => new Request(value, {'cache': 'reload'})));
    })
  );
});

// During activate, the cache is populated with the temp files downloaded in
// install. If this service worker is upgrading from one with a saved
// MANIFEST, then use this to retain unchanged resource files.
self.addEventListener("activate", function(event) {
  return event.waitUntil(async function() {
    try {
      var contentCache = await caches.open(CACHE_NAME);
      var tempCache = await caches.open(TEMP);
      var manifestCache = await caches.open(MANIFEST);
      var manifest = await manifestCache.match('manifest');
      // When there is no prior manifest, clear the entire cache.
      if (!manifest) {
        await caches.delete(CACHE_NAME);
        contentCache = await caches.open(CACHE_NAME);
        for (var request of await tempCache.keys()) {
          var response = await tempCache.match(request);
          await contentCache.put(request, response);
        }
        await caches.delete(TEMP);
        // Save the manifest to make future upgrades efficient.
        await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
        return;
      }
      var oldManifest = await manifest.json();
      var origin = self.location.origin;
      for (var request of await contentCache.keys()) {
        var key = request.url.substring(origin.length + 1);
        if (key == "") {
          key = "/";
        }
        // If a resource from the old manifest is not in the new cache, or if
        // the MD5 sum has changed, delete it. Otherwise the resource is left
        // in the cache and can be reused by the new service worker.
        if (!RESOURCES[key] || RESOURCES[key] != oldManifest[key]) {
          await contentCache.delete(request);
        }
      }
      // Populate the cache with the app shell TEMP files, potentially overwriting
      // cache files preserved above.
      for (var request of await tempCache.keys()) {
        var response = await tempCache.match(request);
        await contentCache.put(request, response);
      }
      await caches.delete(TEMP);
      // Save the manifest to make future upgrades efficient.
      await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
      return;
    } catch (err) {
      // On an unhandled exception the state of the cache cannot be guaranteed.
      console.error('Failed to upgrade service worker: ' + err);
      await caches.delete(CACHE_NAME);
      await caches.delete(TEMP);
      await caches.delete(MANIFEST);
    }
  }());
});

// The fetch handler redirects requests for RESOURCE files to the service
// worker cache.
self.addEventListener("fetch", (event) => {
  if (event.request.method !== 'GET') {
    return;
  }
  var origin = self.location.origin;
  var key = event.request.url.substring(origin.length + 1);
  // Redirect URLs to the index.html
  if (key.indexOf('?v=') != -1) {
    key = key.split('?v=')[0];
  }
  if (event.request.url == origin || event.request.url.startsWith(origin + '/#') || key == '') {
    key = '/';
  }
  // If the URL is not the RESOURCE list then return to signal that the
  // browser should take over.
  if (!RESOURCES[key]) {
    return;
  }
  // If the URL is the index.html, perform an online-first request.
  if (key == '/') {
    return onlineFirst(event);
  }
  event.respondWith(caches.open(CACHE_NAME)
    .then((cache) =>  {
      return cache.match(event.request).then((response) => {
        // Either respond with the cached resource, or perform a fetch and
        // lazily populate the cache.
        return response || fetch(event.request).then((response) => {
          cache.put(event.request, response.clone());
          return response;
        });
      })
    })
  );
});

self.addEventListener('message', (event) => {
  // SkipWaiting can be used to immediately activate a waiting service worker.
  // This will also require a page refresh triggered by the main worker.
  if (event.data === 'skipWaiting') {
    self.skipWaiting();
    return;
  }
  if (event.data === 'downloadOffline') {
    downloadOffline();
    return;
  }
});

// Download offline will check the RESOURCES for all files not in the cache
// and populate them.
async function downloadOffline() {
  var resources = [];
  var contentCache = await caches.open(CACHE_NAME);
  var currentContent = {};
  for (var request of await contentCache.keys()) {
    var key = request.url.substring(origin.length + 1);
    if (key == "") {
      key = "/";
    }
    currentContent[key] = true;
  }
  for (var resourceKey of Object.keys(RESOURCES)) {
    if (!currentContent[resourceKey]) {
      resources.push(resourceKey);
    }
  }
  return contentCache.addAll(resources);
}

// Attempt to download the resource online before falling back to
// the offline cache.
function onlineFirst(event) {
  return event.respondWith(
    fetch(event.request).then((response) => {
      return caches.open(CACHE_NAME).then((cache) => {
        cache.put(event.request, response.clone());
        return response;
      });
    }).catch((error) => {
      return caches.open(CACHE_NAME).then((cache) => {
        return cache.match(event.request).then((response) => {
          if (response != null) {
            return response;
          }
          throw error;
        });
      });
    })
  );
}
