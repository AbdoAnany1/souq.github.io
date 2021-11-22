'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';
const RESOURCES = {
  "assets/AssetManifest.json": "75ad49a5aed65b875dc04b9a99f00a79",
"assets/assets/images/address.svg": "3ef275b088f2ee25c6a23caab75c6e58",
"assets/assets/images/bag.png": "f618005e82322fc74f49d14b1d61f4fb",
"assets/assets/images/birds.svg": "e04181e4d120ad49cc641b1cf351f691",
"assets/assets/images/cardsuccess.svg": "02623b7c54a4ed5c74405345bc22961b",
"assets/assets/images/caretaker.svg": "e736b45ca6cd537ec470588cdfff11dc",
"assets/assets/images/cart.svg": "6fdca8ebdc90372fc2994daeaa0801a0",
"assets/assets/images/cats.svg": "958fb11de2df39cbd3e2ba3c8f694587",
"assets/assets/images/clock.svg": "7cadd6801d0c4cfbf6f4bae2e11ea75d",
"assets/assets/images/creditcard.svg": "2e8b83ff17004dd01d3ead37573e94b5",
"assets/assets/images/emptyCart.svg": "5d005a6dd55a006be829997b0f4e2c65",
"assets/assets/images/femaleAvatar.svg": "31721699225819c35515bc3a7f91f795",
"assets/assets/images/fingerprint.svg": "597d52770164c5086c5d791e8ee09b56",
"assets/assets/images/gift.svg": "b3be0ae43c039256694469f81b5ee221",
"assets/assets/images/global.svg": "e243466fb60d6e72c587d224399a1a70",
"assets/assets/images/help.svg": "24955ae36c08e16a32efdcec4ab50728",
"assets/assets/images/icons/Activity-bold.svg": "c0039cec1bd100d7d965b4f1306de6d1",
"assets/assets/images/icons/Activity.svg": "576b3a3b4aa552b32d2f990e4629c33a",
"assets/assets/images/icons/arrow_right.svg": "7d2e92d8f069ee2c73f1820beea62dfd",
"assets/assets/images/icons/Back%2520ICon.svg": "a1540761ddc4d5ebd1ebf7e732a7af0a",
"assets/assets/images/icons/Bag-bold.svg": "678c9687106a4ad2b932f26d7b5e590a",
"assets/assets/images/icons/Bag.svg": "dc356578714efebec49c9b20b7c574ad",
"assets/assets/images/icons/basket.svg": "55681cb26e48b626fb38baa2d50301f0",
"assets/assets/images/icons/Bell.svg": "03c0fc05f0c26d3107496511ef140dd2",
"assets/assets/images/icons/Bill%2520Icon.svg": "c14fba2dc1da1beac210bc96c90568a6",
"assets/assets/images/icons/Bookmark-bold.svg": "a5c37fa022d322a0a6c87231a8e92baf",
"assets/assets/images/icons/Bookmark.svg": "af86438ae102c215fc78041584b1a1e4",
"assets/assets/images/icons/Calendar-bold.svg": "c6da5e85d6c7ad989a8970c70925fd87",
"assets/assets/images/icons/Calendar.svg": "1530aa36231f77951af5bd87d1c5948f",
"assets/assets/images/icons/Call.svg": "52af54660badff2b15a84fd34203c7ee",
"assets/assets/images/icons/Camera%2520Icon.svg": "25207a856bce06a7c1f4d695638a0383",
"assets/assets/images/icons/Cart%2520Icon.svg": "220f5aa89905b1351c4fdf71aee29f11",
"assets/assets/images/icons/Cash.svg": "9a1bfa4f03729b332bb98439f713637e",
"assets/assets/images/icons/Category-bold.svg": "2ed785734e3b2cf6e2cb49872af1fadd",
"assets/assets/images/icons/Category.svg": "742742781d79fabe75a30de38816b3d0",
"assets/assets/images/icons/Chart-bold.svg": "c4c67a33f30e349f3d83cb9d8a023f38",
"assets/assets/images/icons/Chart.svg": "9138e719ffb0402f4e2341e08faf498c",
"assets/assets/images/icons/Chat%2520bubble%2520Icon.svg": "3e6e1ab6925d3db86ce9bd109c121db0",
"assets/assets/images/icons/Chat-bold.svg": "488c9dfb080bfe9c230e1448e0ab7f64",
"assets/assets/images/icons/Chat.svg": "fb751ea087a15f9386c69d120e593583",
"assets/assets/images/icons/Check%2520mark%2520rounde.svg": "e83caa6ca41e8af9229ae29d79f9410b",
"assets/assets/images/icons/Close.svg": "70478a15e0479750b0b03e000041e9f3",
"assets/assets/images/icons/Conversation.svg": "291fb6c6acdeb807afb452ae90f930db",
"assets/assets/images/icons/Discover.svg": "0981b6e74080b318d0bb4255681d2e05",
"assets/assets/images/icons/Discovery-bold.svg": "b35769c9c5f382bed48dccf4c7155f6a",
"assets/assets/images/icons/Discovery.svg": "24b76228c20921fc80a18c1c1a7e26f9",
"assets/assets/images/icons/Document-bold.svg": "d035bfc0300b1a06c2aed7e9a846700c",
"assets/assets/images/icons/Document.svg": "991bee9d26f4a88dce1528215290f90f",
"assets/assets/images/icons/done.svg": "4e7dc92ea210f738b753fe9eacd42a0c",
"assets/assets/images/icons/Error.svg": "0f876e9b9170982e37bbf767c6ebb47f",
"assets/assets/images/icons/facebook-2.svg": "48bf15d2057966765f384827997a2f41",
"assets/assets/images/icons/Flash%2520Icon.svg": "8b2bc2fd2894d143940eb565b4a827fe",
"assets/assets/images/icons/Folder-bold.svg": "785be596c6b71a415b52eae42952700b",
"assets/assets/images/icons/Folder.svg": "943bc79824aa4f98306dfcfd6b2f35de",
"assets/assets/images/icons/Game%2520Icon.svg": "f913dbd8d0e9e437cfb53d774eb980d9",
"assets/assets/images/icons/Game-bold.svg": "46095ec608a9c62dc97b961358b6d56e",
"assets/assets/images/icons/Game.svg": "494234558838d087fb836e26c6ccc0bf",
"assets/assets/images/icons/Gift%2520Icon.svg": "6feeb93f33263146741e38f4ebfbccbc",
"assets/assets/images/icons/google-icon.svg": "38e282dafbaaf9823263d49349670447",
"assets/assets/images/icons/Graph-bold.svg": "e60422f2bb315e46f0a8f62ec3f57711",
"assets/assets/images/icons/Graph.svg": "b50647062d96d6d3baa87dd8685c61d0",
"assets/assets/images/icons/Heart%2520Icon.svg": "a2be4f5f2079f5ff3dbd117eeaa9471e",
"assets/assets/images/icons/Heart%2520Icon_2.svg": "f728c6b3d75dfab6450f56a2a57633f0",
"assets/assets/images/icons/Heart-bold.svg": "44c5cf8a4d148fab98f47d78dff84179",
"assets/assets/images/icons/Heart.svg": "cb8baaeee62939763263d31b5ca07acd",
"assets/assets/images/icons/Home-bold.svg": "36b3abec540ae0d0d21d788e1bf4f940",
"assets/assets/images/icons/Home.svg": "69784e546f9349ba30bebd51c2560cd5",
"assets/assets/images/icons/language_black_24dp.svg": "5200623bc17e4ad0a6b983bcbaace0f5",
"assets/assets/images/icons/Location%2520point.svg": "146ea387710fa420046c0f71b89ad474",
"assets/assets/images/icons/Location-bold.svg": "101cbeefe634247d205c1e36182bc807",
"assets/assets/images/icons/Location.svg": "e38aac8ac0928833fdd1e4f0283bd661",
"assets/assets/images/icons/Lock.svg": "44a5fb6d11a48fd52c87d95e34e7a689",
"assets/assets/images/icons/Log%2520out.svg": "ef8dc3d612e3e63ae4728a24d9982f13",
"assets/assets/images/icons/Mail.svg": "6b876f2539a1946b1a946e7a5646e909",
"assets/assets/images/icons/Message-bold.svg": "4f5c2ee6e78a34bbac3a79cc4d5cab31",
"assets/assets/images/icons/Message.svg": "67bb3ddbbe7bd4afcadd5d960502b691",
"assets/assets/images/icons/Notification-bold.svg": "e78d4769ee7c36ba30755dd1a2eb8ce6",
"assets/assets/images/icons/Notification.svg": "bcf8b71ac68af3108c9c4b3bac0b4cfc",
"assets/assets/images/icons/Parcel.svg": "45a2e4513281a1c511cff0d7d86439d1",
"assets/assets/images/icons/Phone.svg": "589731a88a098c9c6d40e32bc11c3d83",
"assets/assets/images/icons/Plus%2520Icon.svg": "23bd873f0fdef239500d68a150f9fa93",
"assets/assets/images/icons/Plus-bold.svg": "610b7c1e429e8c437aa87f4fc669d124",
"assets/assets/images/icons/Plus.svg": "53a2cf1cb6081894dfa274407b4b4790",
"assets/assets/images/icons/Profile-bold.svg": "e8766de9ea537471c80849b2b863ff13",
"assets/assets/images/icons/Profile.svg": "4d185e1d1609e118f3ff47ec1d231044",
"assets/assets/images/icons/Question%2520mark.svg": "7d0f74b3eb3cbeac772cb6a41476cfcf",
"assets/assets/images/icons/receipt.svg": "e0ecaf4c17597903fa1e8ab3c28fa963",
"assets/assets/images/icons/remove.svg": "77f17bcf86cb62db1b3ce224d6cb6fd3",
"assets/assets/images/icons/Scan-bold.svg": "bb43447b472883fecdade16432360532",
"assets/assets/images/icons/Scan.svg": "e56a60deeb08b7963d49f94431b20af3",
"assets/assets/images/icons/Search%2520Icon.svg": "5383aff67a0cc61bc20b953c73d87469",
"assets/assets/images/icons/Search-bold.svg": "5a6e008e06158fe1a6afdb1c532f7a99",
"assets/assets/images/icons/Search.svg": "9d2a822832b900ca7ae8260ed76269f6",
"assets/assets/images/icons/Setting-bold.svg": "c8560e8504487a77c2cb3a1cd0fbb118",
"assets/assets/images/icons/Setting.svg": "52c212b236838ea9f3e5d12d1d3b0573",
"assets/assets/images/icons/Settings.svg": "d8fd4b8ed70a516c17d3d981d9a49999",
"assets/assets/images/icons/Shop%2520Icon.svg": "1eda40840728635d3279f313774d1675",
"assets/assets/images/icons/Star%2520Icon.svg": "1ef6ad3bbe15947a5b4d9bf153101fd3",
"assets/assets/images/icons/Star-bold.svg": "3e1d89202943f382b1aba36537404c4e",
"assets/assets/images/icons/Star.svg": "d837c961f0adfb34787c43ddae45b2b0",
"assets/assets/images/icons/store.svg": "9f1cdfde963113f1d6ed6709f180a7b9",
"assets/assets/images/icons/Success.svg": "b0a226cdd68878cf33bddc8d9d2cc1f6",
"assets/assets/images/icons/Trash.svg": "f877c275194b39ca5f21fe7202ca852a",
"assets/assets/images/icons/twitter.svg": "2186bb91925602b76e5a4384b2198c06",
"assets/assets/images/icons/User%2520Icon.svg": "950d2f1652bdb59675231707a9124535",
"assets/assets/images/icons/User.svg": "737d49c1953f8098f618d523b45e5657",
"assets/assets/images/icons/Wallet-bold.svg": "c7240767176fe85a023aadb4ce40baa9",
"assets/assets/images/icons/Wallet.svg": "ee2e5fac9f3508df7b6781dd835ca138",
"assets/assets/images/key.svg": "197fc31e4acbadaed41b9518446ab28b",
"assets/assets/images/logout.svg": "5fa9579c63048ff698a29770fc52fd88",
"assets/assets/images/manage.svg": "a10983eb092cb81a78507559d4ffbaff",
"assets/assets/images/market.svg": "4fa69320fe8270f2fb16caec202f4575",
"assets/assets/images/mastercard.svg": "6d4e5108c7a81693d67d03ee4d02ae0f",
"assets/assets/images/mc_symbol.svg": "543bc93b2e32281bad1ede21bb3afbdd",
"assets/assets/images/noHistory.svg": "cfb49f55eb8da55ee5e66a7587b12849",
"assets/assets/images/noInbox.svg": "d075975c59f2a17a5245debd747ea20d",
"assets/assets/images/noSearch.svg": "90cff973d30a6cdbba5445bbce399dd2",
"assets/assets/images/orderPlaced.svg": "f8a575404c95b8de094ff73911ad0c3a",
"assets/assets/images/password.svg": "7c32d943d599be8f0790eb5f35519c12",
"assets/assets/images/pay.svg": "3241cebfc16bd78240ddf3ec16f2e6bc",
"assets/assets/images/paypal.svg": "7a40cc7b7dd962d8451bf511aa1f32fd",
"assets/assets/images/person.svg": "be01ce045b18a6d1d4c53746eb8adcf4",
"assets/assets/images/pets.svg": "1968f4b83b3e029f9f640c85a0a22c15",
"assets/assets/images/phone_number.svg": "cc117caa319a7bcaa1c8951228314e1a",
"assets/assets/images/placeholder.jpg": "45f1a29ce91f9241e107e698d2167326",
"assets/assets/images/scan_fingerprint.png": "636e545b96410b0c683c354c84a82c3f",
"assets/assets/images/settings.svg": "0fa98f04fe295cce494593c4dc71eda2",
"assets/assets/images/store.png": "6f66a7d62546f5cfdf7d05254dac82da",
"assets/assets/images/verified.svg": "521efe883cb86370b25fded1f86302d1",
"assets/assets/images/visa.svg": "ca07b459fcf2b9044115c9552a8ec395",
"assets/assets/log.png": "b7a27feb79502a0c2d159fd31aab8e32",
"assets/assets/souq.png": "ab4e1d1e0fbef197388e0d31235c8e5e",
"assets/FontManifest.json": "dc3d03800ccca4601324923c0b1d6d57",
"assets/fonts/MaterialIcons-Regular.otf": "4e6447691c9509f7acdbf8a931a85ca1",
"assets/lib/lang/ar.json": "ba6e8c2e4c50b852105aadd186357f82",
"assets/lib/lang/en.json": "cce72ec269ad267ebcf16d8b7316aa2f",
"assets/NOTICES": "60afbad03d43b6af5312569473be1025",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "6d342eb68f170c97609e9da345464e5e",
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"index.html": "8b16265ea490aa64a1ced2623b100b63",
"/": "8b16265ea490aa64a1ced2623b100b63",
"main.dart.js": "db719cb3977dd55286c743523afc2772",
"manifest.json": "6442774767503410f8fc95e885421ef8",
"version.json": "2d7c21359dfc656df828945974c3b440"
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
