'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {".git/COMMIT_EDITMSG": "a08b1a9443db0ad41dc6dddee81eef3e",
".git/config": "bff2795268b7ced9b651b54950bd8820",
".git/description": "a0a7c3fff21f2aea3cfa1d0316dd816c",
".git/FETCH_HEAD": "f3a26ed4916161f6cf6538f37ca6fbfe",
".git/HEAD": "cf7dd3ce51958c5f13fece957cc417fb",
".git/hooks/applypatch-msg.sample": "ce562e08d8098926a3862fc6e7905199",
".git/hooks/commit-msg.sample": "579a3c1e12a1e74a98169175fb913012",
".git/hooks/fsmonitor-watchman.sample": "a0b2633a2c8e97501610bd3f73da66fc",
".git/hooks/post-update.sample": "2b7ea5cee3c49ff53d41e00785eb974c",
".git/hooks/pre-applypatch.sample": "054f9ffb8bfe04a599751cc757226dda",
".git/hooks/pre-commit.sample": "5029bfab85b1c39281aa9697379ea444",
".git/hooks/pre-merge-commit.sample": "39cb268e2a85d436b9eb6f47614c3cbc",
".git/hooks/pre-push.sample": "2c642152299a94e05ea26eae11993b13",
".git/hooks/pre-rebase.sample": "56e45f2bcbc8226d2b4200f7c46371bf",
".git/hooks/pre-receive.sample": "2ad18ec82c20af7b5926ed9cea6aeedd",
".git/hooks/prepare-commit-msg.sample": "2b5c047bdb474555e1787db32b2d2fc5",
".git/hooks/push-to-checkout.sample": "c7ab00c7784efeadad3ae9b228d4b4db",
".git/hooks/sendemail-validate.sample": "4d67df3a8d5c98cb8565c07e42be0b04",
".git/hooks/update.sample": "647ae13c682f7827c22f5fc08a03674e",
".git/index": "59fe353a92292d107ca45cad5e72e00d",
".git/info/exclude": "036208b4a1ab4a235d75c181e685e5a3",
".git/logs/HEAD": "8c6a1ee98549ea891af45bdf7fd14681",
".git/logs/refs/heads/main": "d78b260b27bb1b20669cd643d97c9956",
".git/logs/refs/remotes/origin/HEAD": "71c979f08d0dc15dcf9c3027399c2acc",
".git/logs/refs/remotes/origin/main": "7b93a94b22006f4cb23e54c715d40b4a",
".git/objects/00/ddf99860c2724f1ce93c3b5764770c23693ca4": "69721c7a50196c9d746f7a6988b82ddc",
".git/objects/01/01266496d16e37ccccdb6b08330e6559155de3": "77e2a69758846e645700eb2c0ad726b7",
".git/objects/08/27c17254fd3959af211aaf91a82d3b9a804c2f": "360dc8df65dabbf4e7f858711c46cc09",
".git/objects/08/4e75b09147cf9ba04a61945927ffe820c79d88": "a299abc1ed9aba38da184a9479bb1af8",
".git/objects/0c/640f1a145453255918f4bfdb1153c71c01e173": "76207cc59c57799e177258624038bbf6",
".git/objects/0e/20e2ff4fa4f37e8fa8d9015c846b281e10dc9d": "c4708400b4921678741081dbcb557b04",
".git/objects/10/71a88a46543bae4085ce6e7e0da3cb4a5f0888": "714e4026ae45b2837247d70f133db8f6",
".git/objects/1a/1211262562f467a8bd7d19e19f2b377741c541": "36986296039143b3f7e7086f075f77c7",
".git/objects/20/9e75f77cd9bde59c8799056375be8a3df3293f": "17e31108b67a91f7208fd8c9b60d3357",
".git/objects/23/ab9a70a20505ac12ae39931d15c8bf5b63dcf7": "fd611f5c649d2fdd919f52bf74e240fe",
".git/objects/25/a78cec7c386f386c7ead189d750ec9c48cb24b": "12704303b91f240c55fbc5fb7c1b6053",
".git/objects/26/1eeb9e9f8b2b4b0d119366dda99c6fd7d35c64": "36b35938e0c57b26db0cfe487524a192",
".git/objects/28/5abe8e1539fd91df1920761eb40050387dc6c3": "abe7c07ca801d75de2d17f537bb035fa",
".git/objects/29/0d4d1c5e0c7c660d8844363e0c846c25efecc2": "09c40c9732afe0bcfbef2ed8f850c3e7",
".git/objects/2b/294b1300d8df660b807faad3d801a0fce01a66": "c9b27926cc8e5f3053ca851af47c159a",
".git/objects/35/6e6046a78fcc40a0f99eee4ab81a945303cba8": "0569907e11ab2b54d0e00ec7a3017857",
".git/objects/3a/8cda5335b4b2a108123194b84df133bac91b23": "1636ee51263ed072c69e4e3b8d14f339",
".git/objects/3b/d20fcb069a8e1be89930b07e4fc98fefd2980e": "c959367a9fb4fd7716ef5b0df0015eeb",
".git/objects/3c/a414646221eae27f607d929b1825c202fdab8a": "2ea725ed79d971371b3c3385f7d7664b",
".git/objects/3d/b900c68b29ffae38c7799341cb0691b469d60f": "2a1ed9651a6dccc194abc296e879b54b",
".git/objects/3e/317e74b83a0dda80f404007d09f691cc049489": "882c933d56e2779f7ee019f8ff88f41b",
".git/objects/3e/d691afd24730c924ba0a5659bc36ff52be5dbe": "8a33eda568467d08f49e9a8c57bca553",
".git/objects/45/c5b6bfbaef16c6393e9d03f8af412141de8a90": "dd91435cf5f07ea59357efa6184ee5b8",
".git/objects/46/4ab5882a2234c39b1a4dbad5feba0954478155": "2e52a767dc04391de7b4d0beb32e7fc4",
".git/objects/4b/825dc642cb6eb9a060e54bf8d69288fbee4904": "75589287973d2772c2fc69d664e10822",
".git/objects/4e/ab35d16ee68b8a191b6556b6055498f2a1d332": "56de44fc7d10df097e875c42547f27ad",
".git/objects/4e/c46a15df80c34cbb3ff455b5a6a4488d13d2e6": "b68c6e4038b1f0beec1c0abc3b3ba4ba",
".git/objects/4f/3e804703b3edcb89b3f7431fd54e850dce34ae": "0444a81dfa312d6fa9db2c2cc0959a9e",
".git/objects/51/03e757c71f2abfd2269054a790f775ec61ffa4": "d437b77e41df8fcc0c0e99f143adc093",
".git/objects/51/b897a576e2303329a14a3e5da1b92ecea6d3e5": "417da2cb6485daff86e74730aaa0d42c",
".git/objects/54/0fd20756b4d3df7e816b06fa95f0fe51b77f5b": "1aa75e6903aebda8cbfb89bb4d18ffa9",
".git/objects/58/cc42ea4296ce67f39d583a4d86a55d1728dfe1": "4253649558e498e40ddeb49e24957343",
".git/objects/5b/c1aefe3436355610c9de48709970d022a9513d": "579321576ecb6b3d54d2cfd127e947aa",
".git/objects/65/00f85ac5c4be107c98461c58e3cd7f001f3ff2": "58b4cfecfcde19446fa008dec0f7ead2",
".git/objects/68/43fddc6aef172d5576ecce56160b1c73bc0f85": "2a91c358adf65703ab820ee54e7aff37",
".git/objects/68/b7ed2c1e6ff7aa970a8db763749be69166ffa4": "557eef204167b2311a0839920bb2ee12",
".git/objects/69/1c02dd43ba275a9e80e21013d1eb4312744511": "27f5e9b84392e73c762e88629ec80d6b",
".git/objects/69/73f40ed24ba6b7a8f7a15e518227e370a9bc56": "e8e62e9739e4958d236883ddd8d88c5b",
".git/objects/6b/9862a1351012dc0f337c9ee5067ed3dbfbb439": "85896cd5fba127825eb58df13dfac82b",
".git/objects/6c/6259b43367c42a42fd7473dc6acfbf46e0d20c": "dfda3d30c71123cdb4166bd045f8074c",
".git/objects/6f/7661bc79baa113f478e9a717e0c4959a3f3d27": "985be3a6935e9d31febd5205a9e04c4e",
".git/objects/70/0dc3be02eb3d75c5e07165965d9db2d9240777": "d32de3aff937ea2837e2d4230bb7bd93",
".git/objects/71/aa89a737398e0211f4a52cd206d567bfa0196f": "9de03d1505fdfc61f10e5e16169dd88e",
".git/objects/76/887c4675e70b141e1a0c76ec9b604331a6f62a": "7a933f97d41a64eac973287d700ccb9c",
".git/objects/77/50317b6a9a3a051d0cb14406432d8ac22f0d86": "9cb0a6fb8561e4c451c3f7f1af21be9f",
".git/objects/79/beae8213117a890dc6c41a4d01c132818357fc": "fba91588f98c69408ecb5394d5bf021a",
".git/objects/7a/1826be8f3f27f80ae651db8ff421e45e5d4adb": "d5b1509f2bdc50e906a626ff38657512",
".git/objects/7c/3463b788d022128d17b29072564326f1fd8819": "37fee507a59e935fc85169a822943ba2",
".git/objects/7c/9268eaa8ecf93a1b5f995ce35ec99da67db140": "b7a1f59aed985e99517542b4dd99dd31",
".git/objects/7e/d33c63738686fadb5c1b0814c44763af03e726": "b39d701e07143bad9bdc50d1c5dfd697",
".git/objects/81/08d56ab4b34586a68750d9d099ca7a270f168b": "2ce72ecd4b08f788226ce26004fcb395",
".git/objects/85/63aed2175379d2e75ec05ec0373a302730b6ad": "997f96db42b2dde7c208b10d023a5a8e",
".git/objects/86/8d92a6f32b64e0b9b1cd13c9c790265e6e432e": "e7869e0aba88ac0ffc40e73a5e79dc7f",
".git/objects/87/dfcdc52154c50e901bc462162b54fa4e5935f0": "5c04ad70ef62473f9e986c4167f7874d",
".git/objects/88/556412ae099f489d9e78f0a45d4e758de24a60": "5138054cf4c5816c74a7a192d5aed759",
".git/objects/8e/0c9e15a642c76d7c9718ff5ea9dbc112ab017e": "066225e93c353de1d64418e6abfa8580",
".git/objects/8e/21753cdb204192a414b235db41da6a8446c8b4": "1e467e19cabb5d3d38b8fe200c37479e",
".git/objects/8f/57a99980891ccc68701b94b94342f7ae0e02d6": "1fbb678a273d6cb7864e009f9bfa84c9",
".git/objects/92/175afdba414956867a27debe78599ba5485645": "090e220f45244912885586e962b0e758",
".git/objects/93/b363f37b4951e6c5b9e1932ed169c9928b1e90": "c8d74fb3083c0dc39be8cff78a1d4dd5",
".git/objects/96/8b7251ad99ee126f53dd3619a6d10598b9859f": "7238dbaf7af1bcf86e8f2e223ff9e178",
".git/objects/99/728db9fe30968f4bd5d99ed1cccda9231802db": "c65ffbd6b30a7952812e1a61d8bfd41d",
".git/objects/a7/3f4b23dde68ce5a05ce4c658ccd690c7f707ec": "ee275830276a88bac752feff80ed6470",
".git/objects/a7/8826977e57084e1fc34760775b684e64a2bea1": "6a156bc9ff041a389f7d301c4722fbeb",
".git/objects/ad/7657a29b3c2411bb91611c2b0b96577ccae58b": "2332658458ba73222c98f29ccb2c3ecd",
".git/objects/ad/ced61befd6b9d30829511317b07b72e66918a1": "37e7fcca73f0b6930673b256fac467ae",
".git/objects/af/344d41d7ce6909605fdcc7bbb58e9e934ebdb4": "7e1bf59414ec82129112824878c55152",
".git/objects/b0/e781d01f20dff0ad9025c2dee6311793130549": "8ffce331674061290ed8de0be8288290",
".git/objects/b2/79ac28979d6ac3faabf6edb9cddc33017e4853": "09eb1dfc626271b05f1a514929eec066",
".git/objects/b4/ed3accb7f4aa7c6a0db515e8be6a06c604ca4c": "37e9b418b315511cecab288be1aa3525",
".git/objects/b9/3e39bd49dfaf9e225bb598cd9644f833badd9a": "666b0d595ebbcc37f0c7b61220c18864",
".git/objects/bc/860054e3a768cc6b6b77429f2a411a56ab72f7": "c7fe983f55ad1b81a9e5941492b1dbad",
".git/objects/c0/c5e7b632bfc45363f8c002e1f9652427bbd3be": "7db9f5fc0407e1296c835b8ebb952b39",
".git/objects/c6/35b259caa3a2a239660480cb42c625ca6bb26a": "a642df7cd8cbd74409dee5b6dd3c71ab",
".git/objects/c7/9ae21d589e5e65e99da498f0d697198d0a0020": "5b33509fe61a40a53bb2360c24f1be2c",
".git/objects/c8/3af99da428c63c1f82efdcd11c8d5297bddb04": "144ef6d9a8ff9a753d6e3b9573d5242f",
".git/objects/c9/e356477112b7253273bd810854f32b56004e52": "640ca703d43de215bbb3f3df91ea28dc",
".git/objects/d2/397bc8493c4630750308cb139f46bcca087b42": "ecdc0645931c2fbcf0ff77536edb78ce",
".git/objects/d2/3accc59fe465d56920bae2e07b508fad83b3e4": "26df8981fa36891a301f10095b5e865d",
".git/objects/d4/3532a2348cc9c26053ddb5802f0e5d4b8abc05": "3dad9b209346b1723bb2cc68e7e42a44",
".git/objects/d7/7cfefdbe249b8bf90ce8244ed8fc1732fe8f73": "9c0876641083076714600718b0dab097",
".git/objects/d9/5b1d3499b3b3d3989fa2a461151ba2abd92a07": "a072a09ac2efe43c8d49b7356317e52e",
".git/objects/da/5722104517dcc65b519c0bb1b2ca8e61563f02": "766c283447666e1998f1be0e093a338c",
".git/objects/e5/60903ef1f210484132f8d9101aef7abd4b0c2a": "5911bf9050b372ed5897f7423d9b895d",
".git/objects/e8/6aedfd55f440452f6e0674178056899aa27d82": "08fa850419f011e12e0deabcc3963971",
".git/objects/e9/94225c71c957162e2dcc06abe8295e482f93a2": "2eed33506ed70a5848a0b06f5b754f2c",
".git/objects/f3/3e0726c3581f96c51f862cf61120af36599a32": "afcaefd94c5f13d3da610e0defa27e50",
".git/objects/f5/72b90ef57ee79b82dd846c6871359a7cb10404": "e68f5265f0bb82d792ff536dcb99d803",
".git/objects/f6/e6c75d6f1151eeb165a90f04b4d99effa41e83": "95ea83d65d44e4c524c6d51286406ac8",
".git/objects/fd/05cfbc927a4fedcbe4d6d4b62e2c1ed8918f26": "5675c69555d005a1a244cc8ba90a402c",
".git/ORIG_HEAD": "32e6a1beca0673187ac8ad49110ae487",
".git/refs/heads/main": "efbcf91b5fd2afadf6a9871711626065",
".git/refs/remotes/origin/HEAD": "98b16e0b650190870f1b40bc8f4aec4e",
".git/refs/remotes/origin/main": "efbcf91b5fd2afadf6a9871711626065",
".git/refs/tags/v1.0": "7b48256678057a016df5f553c85b62c8",
"assets/AssetManifest.bin": "9359bd9991e2d51c572e5a96da6ae2a3",
"assets/AssetManifest.bin.json": "c0f452d0c470d5e75fa33dd022928fe5",
"assets/FontManifest.json": "dc3d03800ccca4601324923c0b1d6d57",
"assets/fonts/MaterialIcons-Regular.otf": "c63f66fea04d47496c8d81cdf8cb9b91",
"assets/image.png": "c3ae74cd3a990d951f1ef4ddb733c5b5",
"assets/logoo.png": "a495052ec8a672e3e19fb1907663c1b3",
"assets/mainlogo.png": "4c6c0555aca2e6bba4f79e7e478d3ce9",
"assets/NOTICES": "b5191eca78e2e5974f2ce4548a1dca32",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "33b7d9392238c04c131b6ce224e13711",
"assets/shaders/ink_sparkle.frag": "ecc85a2e95f5e9f53123dcaf8cb9b6ce",
"assets/shaders/stretch_effect.frag": "40d68efbbf360632f614c731219e95f0",
"canvaskit/canvaskit.js": "8331fe38e66b3a898c4f37648aaf7ee2",
"canvaskit/canvaskit.js.symbols": "a3c9f77715b642d0437d9c275caba91e",
"canvaskit/canvaskit.wasm": "9b6a7830bf26959b200594729d73538e",
"canvaskit/chromium/canvaskit.js": "a80c765aaa8af8645c9fb1aae53f9abf",
"canvaskit/chromium/canvaskit.js.symbols": "e2d09f0e434bc118bf67dae526737d07",
"canvaskit/chromium/canvaskit.wasm": "a726e3f75a84fcdf495a15817c63a35d",
"canvaskit/skwasm.js": "8060d46e9a4901ca9991edd3a26be4f0",
"canvaskit/skwasm.js.symbols": "3a4aadf4e8141f284bd524976b1d6bdc",
"canvaskit/skwasm.wasm": "7e5f3afdd3b0747a1fd4517cea239898",
"canvaskit/skwasm_heavy.js": "740d43a6b8240ef9e23eed8c48840da4",
"canvaskit/skwasm_heavy.js.symbols": "0755b4fb399918388d71b59ad390b055",
"canvaskit/skwasm_heavy.wasm": "b0be7910760d205ea4e011458df6ee01",
"CNAME": "d9317e661802edf3fa126da8b0fe2152",
"favicon.png": "82e564bae43e9c1c414f58aadc46bb57",
"flutter.js": "24bc71911b75b5f8135c949e27a2984e",
"flutter_bootstrap.js": "fa062e871af01cf774e0a5122793c282",
"icons/Icon-192.png": "96391826bd47f5ca929d17acbe8bc1bf",
"icons/Icon-512.png": "e3bb6909f7d9770210bfdb5d601a7b11",
"icons/Icon-maskable-192.png": "96391826bd47f5ca929d17acbe8bc1bf",
"icons/Icon-maskable-512.png": "e3bb6909f7d9770210bfdb5d601a7b11",
"index.html": "9af8251bed88dcc7a0832ae0efa1b795",
"/": "9af8251bed88dcc7a0832ae0efa1b795",
"LICENSE.txt": "929ced93c3389de92fb1a6567d76799e",
"main.dart.js": "f9aae80f23f5ad25a355e0501a7982c3",
"manifest.json": "a5878b1f359e0c0a1f5579c918d242ea",
"splash/img/dark-1x.png": "a9a7e8a7dfe1c8e9059e0a1aa033984d",
"splash/img/dark-2x.png": "37659b177e8a54a66a7d7c674fc76879",
"splash/img/dark-3x.png": "ea4ebb5308894d9976f04c26f842cca0",
"splash/img/dark-4x.png": "2696b2526805fb35ba9feafeeb194381",
"splash/img/light-1x.png": "a9a7e8a7dfe1c8e9059e0a1aa033984d",
"splash/img/light-2x.png": "37659b177e8a54a66a7d7c674fc76879",
"splash/img/light-3x.png": "ea4ebb5308894d9976f04c26f842cca0",
"splash/img/light-4x.png": "2696b2526805fb35ba9feafeeb194381",
"version.json": "4aa342dfc8c8a8e124796cfdd1a0b865"};
// The application shell files that are downloaded before a service worker can
// start.
const CORE = ["main.dart.js",
"index.html",
"flutter_bootstrap.js",
"assets/AssetManifest.bin.json",
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
        // Claim client to enable caching on first launch
        self.clients.claim();
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
      // Claim client to enable caching on first launch
      self.clients.claim();
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
        // lazily populate the cache only if the resource was successfully fetched.
        return response || fetch(event.request).then((response) => {
          if (response && Boolean(response.ok)) {
            cache.put(event.request, response.clone());
          }
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
