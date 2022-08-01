'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';
const RESOURCES = {
  ".git/COMMIT_EDITMSG": "568b4671a9db81e565b1eb44664ef356",
".git/config": "a8c95bfa4a86ded596343ecc78bc2022",
".git/description": "a0a7c3fff21f2aea3cfa1d0316dd816c",
".git/FETCH_HEAD": "d0aa9ff337cf131e891be948388905ed",
".git/HEAD": "4cf2d64e44205fe628ddd534e1151b58",
".git/hooks/applypatch-msg.sample": "ce562e08d8098926a3862fc6e7905199",
".git/hooks/commit-msg.sample": "579a3c1e12a1e74a98169175fb913012",
".git/hooks/fsmonitor-watchman.sample": "ea587b0fae70333bce92257152996e70",
".git/hooks/post-update.sample": "2b7ea5cee3c49ff53d41e00785eb974c",
".git/hooks/pre-applypatch.sample": "054f9ffb8bfe04a599751cc757226dda",
".git/hooks/pre-commit.sample": "305eadbbcd6f6d2567e033ad12aabbc4",
".git/hooks/pre-merge-commit.sample": "39cb268e2a85d436b9eb6f47614c3cbc",
".git/hooks/pre-push.sample": "2c642152299a94e05ea26eae11993b13",
".git/hooks/pre-rebase.sample": "56e45f2bcbc8226d2b4200f7c46371bf",
".git/hooks/pre-receive.sample": "2ad18ec82c20af7b5926ed9cea6aeedd",
".git/hooks/prepare-commit-msg.sample": "2b5c047bdb474555e1787db32b2d2fc5",
".git/hooks/push-to-checkout.sample": "c7ab00c7784efeadad3ae9b228d4b4db",
".git/hooks/update.sample": "647ae13c682f7827c22f5fc08a03674e",
".git/index": "17194504904d882c612a763122b7f451",
".git/info/exclude": "036208b4a1ab4a235d75c181e685e5a3",
".git/logs/HEAD": "2f9a2423de6d010f1a74711f526d1bca",
".git/logs/refs/heads/master": "2f9a2423de6d010f1a74711f526d1bca",
".git/logs/refs/remotes/origin/master": "537202647bdfb5b5e7d1a2e05632202f",
".git/objects/00/844d44470589d467b3915694dc1a21caee0017": "531336487969c855ff9ceffab5d7610c",
".git/objects/01/53186bf378169e4b63d030ac5c11ebb37846ff": "9392a4207c28ffad4d3cc4aa2a80cdde",
".git/objects/01/f02872553f9e822875fac4a1d5bf2bfea78f35": "f8493666ae1fc4d9137ff6e6be8fc1dc",
".git/objects/02/bb649b1bc1346bb423cb3aa144af0907780c1d": "06a05d9ba243c48576fced5eb99bdf89",
".git/objects/07/48288d40a6212bc660e70ef6006cddea1467db": "80ad713b0119edca01c8c429fa7ddbed",
".git/objects/0a/4d433c322d9f22ab94a866fe487452fcf49163": "af482479da6c8bd4bf10e132a62d4ea8",
".git/objects/0d/0df08f7c3e147a8ae36017cf81a96e35b73717": "106e868f28a72727fb6fb0fa71123633",
".git/objects/11/0fb8afe205d4b7f5c007a4b822c0b6545bdda1": "0d32afbfe4bcd981934658e2f7726b83",
".git/objects/12/8c371c46ba461659613dcf8d4037050845fb83": "77386787fb283c2ed7e0251456a84fda",
".git/objects/1d/f5914c8f7b6d8291f0450a478712958542c9f3": "81b9c4b22ff7e60b9dd50ffe400daf10",
".git/objects/1f/9dea86d49da71f095111707d03b9140eb69733": "0bd4fa0f40267bf0e6d88529e788d60b",
".git/objects/20/28ab8fad8ab14d8f02bec6e3c514f0d2789c16": "51571510cdd7c65dd65fa0f24983382e",
".git/objects/20/67116ebace2e7cc7f0dc28a1e7035d938b3054": "d47b406b850ce1df0ae8a6dd89727768",
".git/objects/21/3ae7accd5f505297bef4b462613ced1047728f": "c25e56aa5d5e7853a88052b0d46803e5",
".git/objects/24/b1f14dd348b07c9b8373758bde9ac14d16fd92": "dbf45d6c044044561758a334420e9569",
".git/objects/25/ff4bb8e13dbca18873abc8dc12d5e5c3edebe8": "585c9c42a0267a30e5f89427e9bf4e73",
".git/objects/29/2214367c0af9a2eee8f873b2944224e2fe3f0c": "902d6cf3d5ea70392a74bfc9ded583bb",
".git/objects/2d/cf3542c874e33cd8ab86ceb6f0ec444228aa78": "66baad0ae5d874f09b6eee790095bc65",
".git/objects/2f/85fc9f0f81277bb403f36b43efd7c19d948388": "cbf0fdd4be1b813bf5a537edb0f3244b",
".git/objects/32/b4f0f51d8d60d5612ae106c12cd85c8c7dde89": "8893ea80eac035de957ef08bb3f50e22",
".git/objects/3e/d74c1edbf7e50311c9c0a63aaceb7a25cb371f": "7f6a0b5c21f4649e115dd2135445e025",
".git/objects/43/1cb6c0007f9b28879e7d3513b101a61c813c38": "a5aa95f226dbcca106d7c1cb2537c89d",
".git/objects/43/6b3552b08a73e39a3f64749d63b462639b926d": "059afd32cddfa783d36523ae0afb12b8",
".git/objects/45/2033eb45da3273d19eed20a29ea056bf60b5bc": "b89cfe7a276cf1056510ff08fa521b68",
".git/objects/47/e274f5933e722d0d9e4d79ab49cc1ac787c3d7": "ab85c98cd839e3d768ebbc005b152eed",
".git/objects/48/41a58d7ce75d9a694b0b385b3e7cce97da1f1f": "6b2a04292750d433eca2cec84c2acffe",
".git/objects/48/58d55aec479ffb17a82cf0672ca2ac57fbfba5": "e71600344285489ade6163eaee34417c",
".git/objects/4e/89617a3696bd10c155ec378f4a65a9f89e9e3a": "d8056e20bae90d092b619c895129e982",
".git/objects/55/a373597139e25b82e417778c7c817140d63ae6": "75423ae4050f7e3a93f0e519f38b2b4e",
".git/objects/67/0352ce32c2cd65d7249cc3bcd3992f3d556d2c": "82b8f3a97b66c37741988f4e7243ba03",
".git/objects/69/68186bc69224b5d86af20040e270cf5b74e373": "4da136847f1bcb0edc9a52be72250104",
".git/objects/6d/f4d689fb40c76cb01286cc1b2f7e83ab5d8f6e": "65bf0955957cd1cc0b56cc92d9aeeb6e",
".git/objects/6e/715d0ff4640df18444266ac9b86d6bf023bd6a": "b0222c3141094bb5f3d37dc6585ec4a3",
".git/objects/74/d3e804f4fe433c69858de3b026c394bc6464af": "6580943c1400dfdaca777da059ef0aac",
".git/objects/76/8651b2e249c2517c7b37bdbeea0a5d8bfbb707": "495b1c4fefa633f6afe4dc5840ebe18f",
".git/objects/76/87aa937045b19cb312c4824f60f876c05160eb": "30c68f91074c0d5cd1cc7fccb5970bb9",
".git/objects/77/2e1efaa7ba9f1b452046fa6d11309099110408": "33ed560f82a738074e9e5eae01df7687",
".git/objects/79/ba7ea0836b93b3f178067bcd0a0945dbc26b3f": "f3e31aec622d6cf63f619aa3a6023103",
".git/objects/88/a5796c795b9c62be2e1eac970c0a2d64de3c70": "03ae40777fa5a91486fcd87bee9f75be",
".git/objects/88/cfd48dff1169879ba46840804b412fe02fefd6": "e42aaae6a4cbfbc9f6326f1fa9e3380c",
".git/objects/8a/aa46ac1ae21512746f852a42ba87e4165dfdd1": "1d8820d345e38b30de033aa4b5a23e7b",
".git/objects/8a/fafde6a649662e31637d54d02d0834a615e7dc": "7bf0843ee42b9cc5d9c6f63909892fec",
".git/objects/8b/30e53606c395cc055a75f2c72644fed1c95e7e": "79b7af0fd15c2b2aaea0ecffbb84e656",
".git/objects/90/ebb276b8b7ba3488e5bfa1cdb002a1c0f9b2af": "73a54d809ccb42b260c55f0f4b7ea87e",
".git/objects/9f/fa79f1f2bf6f421b708e99bd43ef171f781a9a": "59b59f7708f687da446c57b1e999bb15",
".git/objects/a1/3837a12450aceaa5c8e807c32e781831d67a8f": "bfe4910ea01eb3d69e9520c3b42a0adf",
".git/objects/a9/6dc7af486c858fe2e16e0cc874a6f626bd7854": "bae256de363857e8cff3c3666965a26e",
".git/objects/ab/cca8c937dad7f1c9f74d6785efea63b523f3d9": "35a7d7f8ff4bb226f6e99f742745a8c2",
".git/objects/b2/af2e7c720ba7cb25087d5aa5f9dee7b20ba72d": "264200250ee2c2c5f81765d5e61f6970",
".git/objects/ca/a93b7f420a092b85b9ba1c8aac59b5ee0bd7f8": "8df4c2ca448ceeb587fb441a3834d614",
".git/objects/cb/04778f9545f06c754e8e77a159b6956fffb338": "343049594a6574b1293aca76c48ca1cb",
".git/objects/cd/22076013ce8b84475eae9bb4cd6c60b5460fbe": "81c620e2d6cbe5638d6c90ee25886389",
".git/objects/d0/03a53106e1ade6309cf2760ecc84a8366cd26b": "474300794b39665fadd6d307c29e5463",
".git/objects/d0/065ad9492d43699b7742a23ac78ad7e64d0cec": "7d795b812406018b7a20bfb33c4859cc",
".git/objects/d0/f733de32ec113a26287fbcf25a450f77e530ab": "84cfc914ec588a225bf70d66dd475bdb",
".git/objects/d1/e1b0aec3d2d97d9bfa6289dc9960349b3e8d73": "ab32b29a34cb0fd397d2453d36e24de1",
".git/objects/d2/34babf2953ed015d733905a437a357cd6b999c": "da111b4124979fa32ceaaff3cfbcc115",
".git/objects/d5/cd3399e08d4a83ba26f6e5ff553a351d875de9": "ada556248dc3e357c4a98bfb0b2034e6",
".git/objects/d5/d406087f3386241f86f11730f7c71716cc3bbc": "c98e6c48f952d1de66c8d243ccb2bfd7",
".git/objects/d6/9c56691fbdb0b7efa65097c7cc1edac12a6d3e": "868ce37a3a78b0606713733248a2f579",
".git/objects/d8/c105be8aaefed54f36a780bbb50441f958d0d1": "5fe87644f3eecd424e34d23aaaf2809c",
".git/objects/dd/37e16ecc9301ddaa2e62d3b51a54863ca3b61b": "8ca5c2d2c0251d1d5817e5dacb729194",
".git/objects/de/28db843d7df6ed23b8a7526f6b6b4a83425fe7": "797e4f7b3d8dced098c51679ff33e848",
".git/objects/e3/03108656d9ef6e6edc63e14cf02b47b0ebb03f": "38737bb92c599ecd1bc6dd3f1f070e79",
".git/objects/e5/951dfb943474a56e611d9923405cd06c2dd28d": "c6fa51103d8db5478e1a43a661f6c68d",
".git/objects/e9/e575d0b36ebd696294496017834c26b62e1505": "8eca52e53d59927cc7c00a13888ea67b",
".git/objects/eb/41b763c75085df40f8fd6ffb22ee50daafa059": "f2790b88d9139ca2e8042b5d4a7a0189",
".git/objects/eb/9b4d76e525556d5d89141648c724331630325d": "37c0954235cbe27c4d93e74fe9a578ef",
".git/objects/ee/6498ce4b25cf0ff8d54d6aec024142a0f341f7": "963cd07e9a8486e58df88b1d932dc62d",
".git/objects/f0/253c840a18c96334e3fcd5e1130fc665864185": "5dd27173ac2f1192c03c30c2b760feec",
".git/objects/fe/b006d66234e1b55600b00916023982706abf2d": "c05ea7c31475ad5922bc102ea1c204db",
".git/ORIG_HEAD": "dcee8e5b273c4d537baefa025c815fdf",
".git/refs/heads/master": "eafbbbd41d75bb6f9043b7d5ce6d3abd",
".git/refs/remotes/origin/master": "eafbbbd41d75bb6f9043b7d5ce6d3abd",
"assets/AssetManifest.json": "82e1350fd1c9f24a51319e0d267adf0d",
"assets/assets/fonts/visuelt/VisueltPro-Black.ttf": "691b6f9aa3ee625e3cd8da2f8849a126",
"assets/assets/fonts/visuelt/VisueltPro-Bold.ttf": "18acd33c965a455418d4204f0f334ea8",
"assets/assets/fonts/visuelt/VisueltPro-ExtraLight.ttf": "90bfa0766e43260710e3c6ac0f78c9e9",
"assets/assets/fonts/visuelt/VisueltPro-Light.ttf": "2a1df2ff00c2611bf1b7fdeeaeebfa59",
"assets/assets/fonts/visuelt/VisueltPro-Medium.ttf": "cf4dbc20776a2b309fe30a9bbfe7de0a",
"assets/assets/fonts/visuelt/VisueltPro-Regular.ttf": "0f8cd2494eb8c5e3a33352b2dd38fd61",
"assets/assets/fonts/visuelt/VisueltPro-Thin.ttf": "82d7b5b67c24f00acb08f2dccf1fd03b",
"assets/FontManifest.json": "a78f950d25c1e29b92a4a309465e60cd",
"assets/fonts/MaterialIcons-Regular.otf": "95db9098c58fd6db106f1116bae85a0b",
"assets/NOTICES": "4ac410bd8d6e890d0ac4da80f4384dda",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "6d342eb68f170c97609e9da345464e5e",
"assets/packages/flutter_feather_icons/fonts/feather.ttf": "c96dc22ca29a082af83cce866d35cebc",
"assets/packages/font_awesome_flutter/lib/fonts/fa-brands-400.ttf": "d1722d5cf2c7855862f68edb85e31f88",
"assets/packages/font_awesome_flutter/lib/fonts/fa-regular-400.ttf": "613e4cc1af0eb5148b8ce409ad35446d",
"assets/packages/font_awesome_flutter/lib/fonts/fa-solid-900.ttf": "dd3c4233029270506ecc994d67785a37",
"canvaskit/canvaskit.js": "c2b4e5f3d7a3d82aed024e7249a78487",
"canvaskit/canvaskit.wasm": "4b83d89d9fecbea8ca46f2f760c5a9ba",
"canvaskit/profiling/canvaskit.js": "ae2949af4efc61d28a4a80fffa1db900",
"canvaskit/profiling/canvaskit.wasm": "95e736ab31147d1b2c7b25f11d4c32cd",
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"flutter.js": "eb2682e33f25cd8f1fc59011497c35f8",
"icons/Icon-192.png": "981f1c10ad2ae89a7063f877f91fba46",
"icons/Icon-193.png": "6749b33d944f8753c9c87850b399e9bd",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"icons/Icon-maskable-192.png": "c457ef57daa1d16f64b27b786ec2ea3c",
"icons/Icon-maskable-512.png": "301a7604d45b3e739efc881eb04896ea",
"index.html": "a83c8ecd64b6066f04670cf788dc163a",
"/": "a83c8ecd64b6066f04670cf788dc163a",
"main.dart.js": "6ddb04ee60beabb83f6347059a58044e",
"manifest.json": "b123b1dbb24901e1ce93a10d0e164e3c",
"version.json": "02e7ead2247f06111debc6f96d45813c"
};

// The application shell files that are downloaded before a service worker can
// start.
const CORE = [
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
