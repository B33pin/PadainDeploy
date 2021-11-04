'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';
const RESOURCES = {
  "version.json": "daa03380bf8081b6852c1e1d18fccebc",
"splash/img/light-2x.png": "8afe11dddbcad2889983d73238cba736",
"splash/img/dark-4x.png": "02e62fc0bea1934c9832cddf2a1c7798",
"splash/img/light-3x.png": "76b42dcdd91d6789f5aced6f185bab57",
"splash/img/dark-3x.png": "76b42dcdd91d6789f5aced6f185bab57",
"splash/img/light-4x.png": "02e62fc0bea1934c9832cddf2a1c7798",
"splash/img/dark-2x.png": "8afe11dddbcad2889983d73238cba736",
"splash/img/dark-1x.png": "42df09db25b53605239d5ad80f78407a",
"splash/img/light-1x.png": "42df09db25b53605239d5ad80f78407a",
"splash/style.css": "64227ec06c71fef909f75868ada72c30",
"index.html": "13dcf8fdb75946c46b0e08cce44190ae",
"/": "13dcf8fdb75946c46b0e08cce44190ae",
"main.dart.js": "12c92110d0e23a243ae6ce8f1197fd51",
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-maskable-192.png": "c457ef57daa1d16f64b27b786ec2ea3c",
"icons/Icon-maskable-512.png": "301a7604d45b3e739efc881eb04896ea",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"manifest.json": "5d4302b3e786a4e035d1b80812980e1c",
".git/config": "8b4c16a92b7d45781220a136d56044b0",
".git/objects/59/de04f6df81e6e6a5574420d82407539b035cd7": "ec68a100b6d5016ef391018fca974a9a",
".git/objects/66/0e2d323febde1f386321d1ff3ba1169fab2fd0": "96dcb2e61ee760b2b0bd7d9f11cdd9c8",
".git/objects/3b/e46824f3d38062130081faa3ee73929579a9e5": "1e5b8d54d823262a261f4476be4fdc3b",
".git/objects/32/46ad559eeae0370195978eaed83f1053ee13fd": "a043dbc0a0bda96ce2127799ccc27506",
".git/objects/35/5887911f154f21d3c5835d4813558db76a5c7a": "e75820d3c49020341e4691f89ea3704d",
".git/objects/3c/5b9329b3a343a8f3702986613958fbde77abcb": "d850a37b735b2a8e59fa6886d9b45b9c",
".git/objects/0e/53c451caf7d2c610f96a680242931cb00066f0": "6a29b06ab2309afba5e1b7e7ac2905bd",
".git/objects/60/d0d8e2b6d0a28a425db0275ca521a72c09edf0": "1a59c64cd63fab70bf42ecb9f303d142",
".git/objects/5a/478279798b189cc1d664798f876d8709256968": "23443ac200cb29520114a12bdee52d81",
".git/objects/33/d77f88bd1eab8739306e902f328e262944e7cb": "b7b5e75c75f29fdb1663a2d3b4dc53b3",
".git/objects/9d/b2a622e4ac1a5c0a75d863832bb48149b4073b": "d97930a568d192c773ea98d091d3379e",
".git/objects/9c/b37e8e163a3ff4419dce773cd900df9f81c30d": "760ee655ec38b14b9ea59756c00466b5",
".git/objects/be/06e7fdca57d8fc360647d7b7a6a0c7b2da7e26": "bae1db93c8ff34b5d96b8a5eaf24771a",
".git/objects/df/2d25f8ff1c112a699bf536661c2c1c77f2579b": "830f64309b0944ab923ff9011c6d5e62",
".git/objects/da/bf7c242e938c49fccd0cba88dc2fdccb2f65ee": "bbf7d12e4139b11a89628b8be2fcfda5",
".git/objects/d6/9c56691fbdb0b7efa65097c7cc1edac12a6d3e": "868ce37a3a78b0606713733248a2f579",
".git/objects/e5/951dfb943474a56e611d9923405cd06c2dd28d": "c6fa51103d8db5478e1a43a661f6c68d",
".git/objects/eb/9b4d76e525556d5d89141648c724331630325d": "37c0954235cbe27c4d93e74fe9a578ef",
".git/objects/ee/6238251f406e932d4d3479d7f1627d1b70bf69": "196937910c1004cc3277e8897c92a3e2",
".git/objects/fc/d08ced479cb9e9072122d5503f54a0228a775d": "2c57955ddc54f11fdb19c3392238000a",
".git/objects/f2/1c1aafd98305064cd1c283de5513b413e216eb": "10821fc3b3ea23fb9bc55a017f308281",
".git/objects/f5/c0fdd5313d1b65ab554124ba302fca992134ca": "cd7f02aa634edd5f4821629d12367180",
".git/objects/20/ac973799d7e4050295600553d669a80b92d2fb": "dc0ca7b7df543bbce0739c71d614f07e",
".git/objects/4b/825dc642cb6eb9a060e54bf8d69288fbee4904": "75589287973d2772c2fc69d664e10822",
".git/objects/87/6fc75ee0a6974aa52a895addc762032176d695": "a8e1d623bf8ac46a6ed7944f93b64f60",
".git/objects/80/7fc29b8f3f6b561c4134b1c701bc0c74ff5cf5": "18a50ba21e0d12956c83e4dc38488354",
".git/objects/1a/25ba0f7a38687bc2692a10ec24f08b7c5f16a3": "a8a61011c7b8e3d6b32ab74aaddeca71",
".git/objects/8f/008c36844f28454149ce1a22effe513dc726e6": "0fa45b087e693064e5a2ce35615095ae",
".git/objects/8a/aa46ac1ae21512746f852a42ba87e4165dfdd1": "1d8820d345e38b30de033aa4b5a23e7b",
".git/objects/19/50f0d3b28c028260aeb947eae23b729f7bb62a": "4a55fcc88d8e9d34429daa155df0a0d5",
".git/objects/4c/9691e08468ca94dd16040babc792d48bfa08bc": "4eee2c5adebb24b0050241cc37b18df8",
".git/objects/26/f912b5e3bd6a5c78fcc75c4381192758682065": "64b795caf5d78e9af94ca6c356b3047d",
".git/objects/4d/d119932d3ba03fa4dc823d0b76a03b027f9080": "93c8feed8f51380bc338f2c4f3cd3a88",
".git/objects/86/de261b526e31fdaf9bbb518818a8f91038dd2e": "2afce886df3089141b893b65c6c4109d",
".git/objects/2a/b022196b0fad3910d38ae050ab6814be931799": "effb58727f53792624b2dede6a94285d",
".git/objects/88/cfd48dff1169879ba46840804b412fe02fefd6": "e42aaae6a4cbfbc9f6326f1fa9e3380c",
".git/objects/6b/e32efe3e4dc9a709b06df38b7e6814ea8aff83": "683d2dd587a4e07002854a71b7ce46cb",
".git/objects/6b/bb8d3bf540d24318bce593b431c4ce5287f422": "69aa624eab01d3a81abfb0a3ddc04d03",
".git/objects/00/df26a028738ebe1326c63f9ae47defbc2ef746": "dcb885529c4dae840b05a8dfdd61f6e2",
".git/objects/09/cf12396ee5b928e234da06ef01b60f75b6aa5b": "280ec5645cb1bace3848d9707aaad0d4",
".git/objects/91/9fb0ab2dc811f72217595cf7490875c72c95c4": "edc81abf3c4056fae2faeb4c74b672e1",
".git/objects/96/12b03deaecba89cd57b4d2b3b48d1d1c6aca08": "9a5a0e59a6ccbdf6dac8ad723b982a42",
".git/objects/54/f2b2220ef49d16456655aa67924e772e56ba85": "e13d92b044a0e7d755d3c2165cb232fd",
".git/objects/3f/20c06488235a2bb4efebab4b196e00f2d103ca": "fabd4e5920d81a9e74c82d3b660aa48c",
".git/objects/3f/fb61c9d267c5c0001def91b40f65a53e0638e0": "81c379917d407f92821e86d15675df19",
".git/objects/30/4613b0ccc0174d5c90d2fa5a405895ec2dff7f": "bbcef9da178f268166d4c3c41e0caab9",
".git/objects/6d/472db54aaabb762cc768c64257ba305719398c": "c64a5f12587bbb579ce517ca242d0f53",
".git/objects/01/9a8544824a5a981ad964fd17d0bba4d7c20ff6": "6c2492049f53fdb68f8c7f1faa505c16",
".git/objects/6c/54978412671ce1b553ce1484af1313d7c82cbe": "17f1ada5f74aeafa8b1a46d5afbfc9a4",
".git/objects/99/4761922386f6aa255e2001de5c6ec259f988be": "d3038ff6a7f94b9956aae256f2d25388",
".git/objects/63/d32011aa8c3a2e9f41dc179c6e198d7895da72": "e0fd4a12b74251ede1783594f47d0850",
".git/objects/90/8e2a7954857695b8b9d33659926ce8ce19ee0b": "b38d25ba8359fc6665e92acd8c5b8533",
".git/objects/b1/d302860340fdb80026edaead5aef4fdba1ecfb": "484d69bc6575c49407c8aa388484cfcc",
".git/objects/b1/d1afca2a3f55e1240b4bae57b2d98c513d76f8": "5966bb4f9a78ec11c7b39e7706d224c8",
".git/objects/b6/55a13415f0db3d2bcdff5ca50009135efaf42a": "fec9e25f54f7841b712ca08651552bdc",
".git/objects/a9/520b78ac4635319aafe2cc88f1b40c8289b1c8": "f268f08f109671711197a41d2104993e",
".git/objects/aa/5239cadb4db22501bf784325e2b8bfd227927e": "72343df08f292d2178628044368136b0",
".git/objects/b7/1afba1bc10fcd658759b8ede4bd0e5ca30df98": "2345ad56abaa051d6cd10e533e432aa8",
".git/objects/b7/49bfef07473333cf1dd31e9eed89862a5d52aa": "36b4020dca303986cad10924774fb5dc",
".git/objects/a8/beffd3ad4fe54d6cabccf83a05477d6a986cd0": "6677888e4a051c7838b5b240c09f0981",
".git/objects/b9/2a0d854da9a8f73216c4a0ef07a0f0a44e4373": "f62d1eb7f51165e2a6d2ef1921f976f3",
".git/objects/b9/4d47f3af31505f3cfcba533da52b881b6a1b33": "ab777130815383dc41d27318b6ffbe0e",
".git/objects/a1/3837a12450aceaa5c8e807c32e781831d67a8f": "bfe4910ea01eb3d69e9520c3b42a0adf",
".git/objects/e1/64a6113d18eb79f29f9793f7f38d4ce4e5f619": "7618b777d970ca93bfa3d81716bd4a1e",
".git/objects/e8/7db7c6b30fe47890b70f0c50af688860872a30": "217628192b88853b560dbf821c4c92b7",
".git/objects/e8/74c003ad38a831872f19ff2cc3317b507c0e60": "e086e18d3438e00cd25acd3d26788992",
".git/objects/e8/886d11efae822ad7a3b8ea1fa6274168747c72": "f58898e33b8aca065effcc6fb89a553a",
".git/objects/c5/eab420f4af3fca51e9bfbaf6c0441ed1f12d5e": "efc962400a49eadc94573f9f53fefdce",
".git/objects/c5/88fa1e49512445052e1a9ae79b6f059768c2fd": "94d32260baed04d6def3e98df62ddb91",
".git/objects/c2/0a0ca49195225270f619a375f7d043bdd2463d": "1b6793c34cc18492f8318b34b58dc525",
".git/objects/e9/0e87ed69a7ebb8d965ec248fb86286423f103f": "4abcf8c77330fc7fd658318fc2374d78",
".git/objects/79/b4f9f0b46b5da0bf469b24d189a4e407152da0": "da12a3f3a4bbb3d1cacc6539cdf5f655",
".git/objects/79/ba7ea0836b93b3f178067bcd0a0945dbc26b3f": "f3e31aec622d6cf63f619aa3a6023103",
".git/objects/79/1263d41f9f4cb66db480015f728ffe1067458f": "3ded7e09ab3b7d6e00279ceea95e1adc",
".git/objects/1b/246593f1caeab9af5607f7c56573852224ca1b": "b2b33484b7fff0a84eeb0da45ac78bd2",
".git/objects/84/67aabfaab7147abfe1fd470f7b60edfce60674": "d644418265caffd167e3a813da8c9e5f",
".git/objects/24/d3d133a3ac0662e299ad3ec7bac803c117ba5d": "233e7e945297b5979c3a7ec31ae16d6c",
".git/objects/23/4d58da6b2a16dd4b01ceb075551cb7b6d3b92f": "c948f09236487fd526630d6a1a15392f",
".git/objects/23/517e8e7fd85a0fa0e9b4a162ae0b4c7de94cdd": "6efa3736458263ef95e5864f683a9e43",
".git/objects/23/179a16ec5f0260cfef2542a7dd11d585317ff1": "e5045bf516f20221b24569152c42380b",
".git/objects/15/693348ce6e69ce3698a91e67b9e645cda286b2": "d133786c857eb742171a4e4a46f73819",
".git/objects/8c/44c9310abc29b035e26420a3c319937cadcf52": "b62eb18352c9545408e71c733e508ce2",
".git/objects/85/0119e6b6a683d35535feecdc0dbae7614c35ea": "70d4ed8096ad92a277706cc741f483dc",
".git/objects/1c/523158a35d9cba14fb8b606a22808f33a06a4e": "7b7f4a2b4f8f4e9a28cac7b13ff8e6e7",
".git/objects/49/f7bb736515cfcb708e89541f8e200d2ac413c0": "be31d2f381efa1ec7f8e0bf2fa712234",
".git/objects/2e/1f6b0fcef41c1b999f738102612bae4fa9094d": "82389d6785cf06eefc7f7ed15602d466",
".git/objects/2e/5b9f163d6755786e219b435077d72633c19c18": "3590b084174d12f139d31e94eb0e375a",
".git/objects/2b/14e77180ac381f96d7f915a355f93238ecd380": "e67de27922b01edb0ec0425ef28edc7b",
".git/objects/2b/154f84fbfddd5c81810f6162d12f339d319403": "a82ee7c1125cb8ddd71277a49d7b4fd5",
".git/objects/8e/67613af0410e56da0f5271e89759c83f1fd580": "e85abfc58640d4a8f1a9085bd1aa3d9c",
".git/HEAD": "cf7dd3ce51958c5f13fece957cc417fb",
".git/info/exclude": "036208b4a1ab4a235d75c181e685e5a3",
".git/logs/HEAD": "e6ab085093dacfa40851310448239709",
".git/logs/refs/heads/main": "8e592f085fa7d870993e0c21ea9fda53",
".git/logs/refs/remotes/origin/main": "b3007d2799c68d55a0c3aa94840ec410",
".git/description": "a0a7c3fff21f2aea3cfa1d0316dd816c",
".git/hooks/commit-msg.sample": "579a3c1e12a1e74a98169175fb913012",
".git/hooks/pre-rebase.sample": "56e45f2bcbc8226d2b4200f7c46371bf",
".git/hooks/pre-commit.sample": "305eadbbcd6f6d2567e033ad12aabbc4",
".git/hooks/applypatch-msg.sample": "ce562e08d8098926a3862fc6e7905199",
".git/hooks/fsmonitor-watchman.sample": "ea587b0fae70333bce92257152996e70",
".git/hooks/pre-receive.sample": "2ad18ec82c20af7b5926ed9cea6aeedd",
".git/hooks/prepare-commit-msg.sample": "2b5c047bdb474555e1787db32b2d2fc5",
".git/hooks/post-update.sample": "2b7ea5cee3c49ff53d41e00785eb974c",
".git/hooks/pre-merge-commit.sample": "39cb268e2a85d436b9eb6f47614c3cbc",
".git/hooks/pre-applypatch.sample": "054f9ffb8bfe04a599751cc757226dda",
".git/hooks/pre-push.sample": "2c642152299a94e05ea26eae11993b13",
".git/hooks/update.sample": "647ae13c682f7827c22f5fc08a03674e",
".git/hooks/push-to-checkout.sample": "c7ab00c7784efeadad3ae9b228d4b4db",
".git/refs/heads/main": "3de32addf3196890a3b1aaaebcd9bce0",
".git/refs/remotes/origin/main": "3de32addf3196890a3b1aaaebcd9bce0",
".git/index": "c9b7d9fe5081d760711d6efe7452c8dd",
".git/COMMIT_EDITMSG": "c655db616bc54d1bc1f757beda80a76f",
"assets/AssetManifest.json": "f4daf9fd28514cfb51fceeda794c59cd",
"assets/NOTICES": "f21aee2bce2ffb6fecfce76a133adce0",
"assets/FontManifest.json": "d6d4d32773637de5e6975092ccb709af",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "6d342eb68f170c97609e9da345464e5e",
"assets/packages/font_awesome_flutter/lib/fonts/fa-solid-900.ttf": "aa1ec80f1b30a51d64c72f669c1326a7",
"assets/packages/font_awesome_flutter/lib/fonts/fa-regular-400.ttf": "5178af1d278432bec8fc830d50996d6f",
"assets/packages/font_awesome_flutter/lib/fonts/fa-brands-400.ttf": "b37ae0f14cbc958316fac4635383b6e8",
"assets/fonts/MaterialIcons-Regular.otf": "4e6447691c9509f7acdbf8a931a85ca1",
"assets/assets/images/otp.png": "38f4e09ddc9a5ce5ed92c26cf49d556d",
"assets/assets/images/signUpImg1.png": "d85e01ea3fe5326e3f60d947f0f00264",
"assets/assets/images/padai.png": "9c4d9f631b210c8d7d45e857fc792e62",
"assets/assets/images/2.png": "e2b74d3d456eae451d61efdea21d8101",
"assets/assets/images/verify.png": "e95e465555c65c8265746665fc2162af",
"assets/assets/images/3.png": "363531ace1c3fcab90d80333ec5409e7",
"assets/assets/images/1.png": "23dc440bd57cc281e09ab1011461fb9c",
"assets/assets/icons/calender.png": "b0a170967b037f11dd1289802838819d",
"assets/assets/icons/nepal.png": "9513d1f2e8db232de05469cea4d2b10e",
"assets/assets/fonts/Poppins-ExtraLight.ttf": "86a2f13e91ac85080ebaeaab9463b9f1",
"assets/assets/fonts/Poppins-Light.ttf": "f6ea751e936ade6edcd03a26b8153b4a",
"assets/assets/fonts/Poppins-Medium.ttf": "f61a4eb27371b7453bf5b12ab3648b9e",
"assets/assets/fonts/Poppins-ExtraBold.ttf": "544fa4f2678a8285eb88b8dfe503c90c",
"assets/assets/fonts/Poppins-Regular.ttf": "8b6af8e5e8324edfd77af8b3b35d7f9c",
"assets/assets/fonts/Poppins-Bold.ttf": "a3e0b5f427803a187c1b62c5919196aa",
"assets/assets/fonts/Poppins-Black.ttf": "0573b9231a8316427ad6e751b52e87a4",
"assets/assets/fonts/Poppins-Thin.ttf": "25cd0f688f815bc4f6ac2b71eb6278ba",
"assets/assets/fonts/Poppins-SemiBold.ttf": "4cdacb8f89d588d69e8570edcbe49507",
"assets/assets/animations/reset.riv": "dac771ce722f031fbcfebcc3fb6846df",
"assets/assets/animations/verify.riv": "2e893b4aae7c113f404b60dacb8e8b56",
"assets/assets/animations/forgot.riv": "c44e52bbcbcf69bd05fbf23b7e78f598",
"assets/assets/animations/signup.riv": "d8d1c33cad8b2837d8315d63c061b9bb"
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
