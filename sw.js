importScripts('workbox-sw.prod.v2.0.1.js');

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
    "url": "bower.json",
    "revision": "08041687aaaa52da0fa436ffbb45ef29"
  },
  {
    "url": "css/print/paper.css",
    "revision": "e0099451ed09800b0fc64e1d797d1813"
  },
  {
    "url": "css/print/pdf.css",
    "revision": "4d58f22e9c31a9ee45d338cb1ad749f7"
  },
  {
    "url": "css/reveal.css",
    "revision": "246bbd1e7258037a690f1063b1871cef"
  },
  {
    "url": "css/reveal.min.css",
    "revision": "1b2d07d01fa3c17c45c6a449e99cff06"
  },
  {
    "url": "css/theme/beige.css",
    "revision": "c9fa908662d7764641ff6126118ffa43"
  },
  {
    "url": "css/theme/black.css",
    "revision": "bc3987f42e8237a00774eb63f56a9af8"
  },
  {
    "url": "css/theme/blood.css",
    "revision": "fe3cf28d81169c6b5ec619a85b6854a7"
  },
  {
    "url": "css/theme/league.css",
    "revision": "d5c78c8c3559e511b18d464697a6eb14"
  },
  {
    "url": "css/theme/moon.css",
    "revision": "191047dd6c1d525cbf3028e9ad599a26"
  },
  {
    "url": "css/theme/night.css",
    "revision": "73588b8e1fea879d6a7fb59acb27e997"
  },
  {
    "url": "css/theme/serif.css",
    "revision": "28e90084140df2797716c5e80dbf1137"
  },
  {
    "url": "css/theme/simple.css",
    "revision": "14636648051cbb2f8a6d6fc2d70489b3"
  },
  {
    "url": "css/theme/sky.css",
    "revision": "c2a96242b0b373237113a85ca4db991b"
  },
  {
    "url": "css/theme/solarized.css",
    "revision": "f44d25a339404e73ab17f5e426fb5476"
  },
  {
    "url": "css/theme/white.css",
    "revision": "22e88a482e01400bf2fe793e46105d5b"
  },
  {
    "url": "Gruntfile.js",
    "revision": "d54f11cb6f2fba0c7047e10ab06daf02"
  },
  {
    "url": "images/1463567179.png",
    "revision": "fded40c96e3ef6c1ea3a946e610c8a50"
  },
  {
    "url": "images/accelerometer.jpg",
    "revision": "06838e963889772d9b6a5acd883158ac"
  },
  {
    "url": "images/ajfisher.jpeg",
    "revision": "e430f42a940b110fc4daee1b39d4de49"
  },
  {
    "url": "images/ar3d.png",
    "revision": "c920e1bceafed693a70040b85a324203"
  },
  {
    "url": "images/arduino-uno.png",
    "revision": "1d2334eb962c18af0f736f4cd9fc73ae"
  },
  {
    "url": "images/arrow2.png",
    "revision": "0afc09367c01defa05e318e3452fb963"
  },
  {
    "url": "images/BLE_diagram.png",
    "revision": "6af20a1e34cc8a618184b4dac4b20d44"
  },
  {
    "url": "images/bluetooth-icon-6.png",
    "revision": "ed63952a3c4293f520d481fb21314a76"
  },
  {
    "url": "images/browser_j5.png",
    "revision": "8134d1bea50f43f41ce5401e9925b3f4"
  },
  {
    "url": "images/browser.png",
    "revision": "03ad4d95e84f5241544d919ec072635d"
  },
  {
    "url": "images/Chrome-logo-2015.png",
    "revision": "f71c4156d84f607c2886df0bd8d206f8"
  },
  {
    "url": "images/cloud.png",
    "revision": "6c69aca085398d33e50b9d8a0adb2861"
  },
  {
    "url": "images/curves.png",
    "revision": "5e91c92967fa824dd8c43a91f6768e5f"
  },
  {
    "url": "images/demo.png",
    "revision": "8a5f4e75e5ad99ff4ca8e656272e958c"
  },
  {
    "url": "images/empire.png",
    "revision": "be21e47cb97fcd414aff8adca53a4e5e"
  },
  {
    "url": "images/flex.png",
    "revision": "d42e487325e7ecf75b0819b03f1900e6"
  },
  {
    "url": "images/game-of-thrones-eastwatch-review-8.jpg",
    "revision": "a4bcc5579c5eae955e1802372d95cf7e"
  },
  {
    "url": "images/gamil.png",
    "revision": "cb638681789d94138dc198cb0764fb3f"
  },
  {
    "url": "images/gh-icon.svg",
    "revision": "d7e08b5dd7f523028de2769c21adae75"
  },
  {
    "url": "images/guidelines-logo.7ea045a4e288.png",
    "revision": "7ea045a4e288eeb21f55a95613dfe974"
  },
  {
    "url": "images/heatsync.jpg",
    "revision": "c22db07ee17c5005042e9027577889dc"
  },
  {
    "url": "images/HIRO.jpg",
    "revision": "957fb590e3f9aa42178811c99bf3e352"
  },
  {
    "url": "images/iced_blue.png",
    "revision": "b94b9af7eac6ed81a9a0668ce17ba39e"
  },
  {
    "url": "images/io_authors.png",
    "revision": "d06cfe3527533aea25f351fc21ddd367"
  },
  {
    "url": "images/iofs.png",
    "revision": "360e56a9a840570f75a8563fd10715de"
  },
  {
    "url": "images/j5ble.jpg",
    "revision": "6d4572c0f294f8d0544db1ebb6de8cec"
  },
  {
    "url": "images/johnnyfive.png",
    "revision": "07cf7ac12551c25e0f93a5df4a0ba5b4"
  },
  {
    "url": "images/js.png",
    "revision": "9d0a5030ff3a59fc22a5a3cdf411751e"
  },
  {
    "url": "images/L7gdy.png",
    "revision": "e4719f0528ae8bb9977f61ed8e507d07"
  },
  {
    "url": "images/leds.png",
    "revision": "f4573d3f6ebec41fefca0e61f72c6087"
  },
  {
    "url": "images/logo-7b6db735.svg",
    "revision": "20a7977c87705e1adad9236586014de4"
  },
  {
    "url": "images/louiemontes.jpeg",
    "revision": "6be9a14603e7f6da5f4fba3241be8a25"
  },
  {
    "url": "images/maetser-varys-1024.jpg",
    "revision": "451b25dddf7dea963e0e2dd9eb39b52a"
  },
  {
    "url": "images/mesasez.jpeg",
    "revision": "ee3ae43d69a67fa032b0a95f1cb03865"
  },
  {
    "url": "images/micro_leo.png",
    "revision": "c796a2fd3371adc6927e7a1f4585f37d"
  },
  {
    "url": "images/midi_arduino.png",
    "revision": "7f1e98065e33598d68fd51133330c2c6"
  },
  {
    "url": "images/midikeyboard.jpg",
    "revision": "dbee35bf5c614e4f0930fbad5ed5dd06"
  },
  {
    "url": "images/midikeyboard.png",
    "revision": "286ad5b4b3d5829306be52637539a7da"
  },
  {
    "url": "images/mkr100.jpg",
    "revision": "bddf5ee8cd5ab1a88d81aedafcd30c2a"
  },
  {
    "url": "images/monteslu_qr.png",
    "revision": "7363832dce9863f13fefc41651342e3d"
  },
  {
    "url": "images/monteslu_robo.png",
    "revision": "cbb1b66a36e61c990f926d9259e14574"
  },
  {
    "url": "images/nfc.png",
    "revision": "6179ec79f75c8e885fe728ea5e64b49e"
  },
  {
    "url": "images/node-led.jpg",
    "revision": "ca3906c182e8be492875aebf752ba787"
  },
  {
    "url": "images/node-pixel.jpeg",
    "revision": "138e76f3fa5460b0fe1893594e692989"
  },
  {
    "url": "images/nodebotsday.jpg",
    "revision": "2719b34213b5d3188f28513f58bcef8d"
  },
  {
    "url": "images/nodebotsday2014.jpg",
    "revision": "0e27a35f96be0dba8405252811722f73"
  },
  {
    "url": "images/nodebotsday2015.jpg",
    "revision": "3a3a9332ebe086e08965aed1bce60be4"
  },
  {
    "url": "images/nodebotsday2017.jpg",
    "revision": "bc599d177e451553592b31a9b81280af"
  },
  {
    "url": "images/nodebotsdays.jpg",
    "revision": "e8b43d023c4e925a56e48a936c45a139"
  },
  {
    "url": "images/nodejs-icon.svg",
    "revision": "b337a2fb0b1289e6757e632dc766ff6b"
  },
  {
    "url": "images/nodejs-logo.png",
    "revision": "7234c47a96ac47a3cf540be61f8adbf1"
  },
  {
    "url": "images/nodelogo.svg",
    "revision": "6b23ccebef1ad7e48217ae742133208c"
  },
  {
    "url": "images/noopkat.jpeg",
    "revision": "f3c653a4fd83dfae60e6240ee258ae5e"
  },
  {
    "url": "images/oled-js.jpg",
    "revision": "cab3a284dbd3679535bfc1934796de64"
  },
  {
    "url": "images/pagenodes.png",
    "revision": "83582ed8957cfa346b28ea52bf75649f"
  },
  {
    "url": "images/petyr_1.jpeg",
    "revision": "1cdec52ef49081407de7c7932b59e884"
  },
  {
    "url": "images/petyr_laugh.jpg",
    "revision": "94f140a882030a6cb7909ece08dbe6f1"
  },
  {
    "url": "images/petyr1.jpg",
    "revision": "3c2b660d414b1c7a5420553382063310"
  },
  {
    "url": "images/physicalweb.png",
    "revision": "148d9e0714bf99675888dacfb09f34fc"
  },
  {
    "url": "images/pilot.png",
    "revision": "1b8902995f98a912a8bc47e302b080ac"
  },
  {
    "url": "images/pluggedIn.png",
    "revision": "9a513a6f07069d0540dd05ea7c87e325"
  },
  {
    "url": "images/pluggedin1.png",
    "revision": "97473b505930c88c7609f960ffc2b92e"
  },
  {
    "url": "images/pluggedin2.png",
    "revision": "5e0bdb8b3fced8fe92ebbc9208d4a264"
  },
  {
    "url": "images/pluggedin3.png",
    "revision": "82ac2bfd5209fdcb7d1cacf1a913baf8"
  },
  {
    "url": "images/pluggedin4.png",
    "revision": "b178900c4a06534a9038057bacb6f5e6"
  },
  {
    "url": "images/pluggedin5.png",
    "revision": "0180d90a2ae39063bf4893ebe783813d"
  },
  {
    "url": "images/pluggedin6.png",
    "revision": "4c963768c2fe9e550617bdd7d85b88e4"
  },
  {
    "url": "images/progressive.jpg",
    "revision": "ebfab336c89ace54c993328d1d8bae65"
  },
  {
    "url": "images/promicro_1.jpg",
    "revision": "edce74bb62c354773392355bc98da39b"
  },
  {
    "url": "images/raven_messenger___event_card_by_zororonoaro-d52rzt2.jpg",
    "revision": "55af58d4252ad4020e6f2a0ee65c07f0"
  },
  {
    "url": "images/scroll.png",
    "revision": "7f14a44a27989aefcb2c639498b67efa"
  },
  {
    "url": "images/serial_devs.png",
    "revision": "10efd8cb3020ddcb0a0631873e1eeda1"
  },
  {
    "url": "images/shiftingbits.png",
    "revision": "c09bb9429b80355e3b7e52cf5599e800"
  },
  {
    "url": "images/t-icon.svg",
    "revision": "21e7d6e047c91b2af6edf35f8e924c44"
  },
  {
    "url": "images/thought.png",
    "revision": "f13c34b0fff65bf31304031233c8f9fc"
  },
  {
    "url": "images/usb.gif",
    "revision": "4f3267964f80e2ebcb2c0d55c0f0e58e"
  },
  {
    "url": "images/Varys2.png",
    "revision": "0c6b48e2409f9adb8291cfb827ff7488"
  },
  {
    "url": "images/vr.jpg",
    "revision": "62b5077e676ada5db7b422ad2bf3b1e9"
  },
  {
    "url": "images/webrtc1.png",
    "revision": "04b92200bde5f8c2ebe15653c15f0eb4"
  },
  {
    "url": "images/webrtc2.png",
    "revision": "a61ecfc0d05e57c172ef3e407918fe6a"
  },
  {
    "url": "images/webrtc3.png",
    "revision": "1c7605ca79cfb2c0367bbab33dbbe880"
  },
  {
    "url": "images/webrtc4.png",
    "revision": "2f0f498d24a674c84270422c83342c22"
  },
  {
    "url": "images/webrtc5.png",
    "revision": "770aa67a67df264e5836beea489eddb2"
  },
  {
    "url": "images/webrtc6.png",
    "revision": "78b759f7387ff2a0b31eea84767dad89"
  },
  {
    "url": "images/webrtc7.png",
    "revision": "8f4618b34de9e68cbc7e2bc703588883"
  },
  {
    "url": "images/zero.jpg",
    "revision": "8f3e961f45f0c1b4602d4e48f839b745"
  },
  {
    "url": "index.html",
    "revision": "fcc56582adcc235db3cdb861c2048c62"
  },
  {
    "url": "js/reveal.js",
    "revision": "ae77807b7c32b5264f572a5a69690af3"
  },
  {
    "url": "js/reveal.min.js",
    "revision": "4b6d5b01be2a485eceb902543c20882f"
  },
  {
    "url": "launcher-icon-2x.png",
    "revision": "11dc383446a08d35e79f98c02f4ed999"
  },
  {
    "url": "launcher-icon-3x.png",
    "revision": "372919bb626fe5615a11e170f9d4b446"
  },
  {
    "url": "launcher-icon-4x.png",
    "revision": "69bd621689ba0afad6481f2e7c8630bd"
  },
  {
    "url": "lib/css/zenburn.css",
    "revision": "28d5b9497037a12cb5a15644fea2f1c3"
  },
  {
    "url": "lib/font/league-gothic/league-gothic.css",
    "revision": "c97bd52a8b59fbe97dbbd2d220f56f63"
  },
  {
    "url": "lib/font/league-gothic/league-gothic.eot",
    "revision": "9900a4643cc63c5d8f969d2196f72572"
  },
  {
    "url": "lib/font/league-gothic/league-gothic.ttf",
    "revision": "91295fa87df918411b49b7531da5d558"
  },
  {
    "url": "lib/font/league-gothic/league-gothic.woff",
    "revision": "cd382dc8a9d6317864b5810a320effc5"
  },
  {
    "url": "lib/font/rbn/rbn.css",
    "revision": "c0ba7757f2cda99c0918992c09411241"
  },
  {
    "url": "lib/font/source-sans-pro/source-sans-pro-italic.eot",
    "revision": "72217712eb8d28872e7069322f3fda23"
  },
  {
    "url": "lib/font/source-sans-pro/source-sans-pro-italic.ttf",
    "revision": "8256cfd7e4017a7690814879409212cd"
  },
  {
    "url": "lib/font/source-sans-pro/source-sans-pro-italic.woff",
    "revision": "e74f0128884561828ce8c9cf5c284ab8"
  },
  {
    "url": "lib/font/source-sans-pro/source-sans-pro-regular.eot",
    "revision": "1d71438462d532b62b05cdd7e6d7197d"
  },
  {
    "url": "lib/font/source-sans-pro/source-sans-pro-regular.ttf",
    "revision": "2da39ecf9246383937da11b44b7bd9b4"
  },
  {
    "url": "lib/font/source-sans-pro/source-sans-pro-regular.woff",
    "revision": "e7acc589bb558fe58936a853f570193c"
  },
  {
    "url": "lib/font/source-sans-pro/source-sans-pro-semibold.eot",
    "revision": "0f3da1edf1b5c6a94a6ad948a7664451"
  },
  {
    "url": "lib/font/source-sans-pro/source-sans-pro-semibold.ttf",
    "revision": "f3565095e6c9158140444970f5a2c5ed"
  },
  {
    "url": "lib/font/source-sans-pro/source-sans-pro-semibold.woff",
    "revision": "1cb8e94f1185f1131a0c895165998f2b"
  },
  {
    "url": "lib/font/source-sans-pro/source-sans-pro-semibolditalic.eot",
    "revision": "58153ac7194e141d1e73ea88c6b63861"
  },
  {
    "url": "lib/font/source-sans-pro/source-sans-pro-semibolditalic.ttf",
    "revision": "c7e698a4d0956f4a939f42a05685bbf5"
  },
  {
    "url": "lib/font/source-sans-pro/source-sans-pro-semibolditalic.woff",
    "revision": "6b058fc2634b01d837c3432316c3141f"
  },
  {
    "url": "lib/font/source-sans-pro/source-sans-pro.css",
    "revision": "50bd311455fff1130be7d191108d9f27"
  },
  {
    "url": "lib/js/classList.js",
    "revision": "daeaae1afb79c4577c26fc099228cb44"
  },
  {
    "url": "lib/js/head.min.js",
    "revision": "cda51f90890bc6411432994f00ec49c5"
  },
  {
    "url": "lib/js/html5shiv.js",
    "revision": "ff0e20a524223e4c3972e0d907e0877b"
  },
  {
    "url": "manifest.json",
    "revision": "29a096b6e18d5d12ebe8216ff9315386"
  },
  {
    "url": "package.json",
    "revision": "ce7a30b25c84d4edaa3996d1d78d1e4b"
  },
  {
    "url": "plugin/highlight/highlight.js",
    "revision": "abdb7bb0310b341e41ba34497d97e62b"
  },
  {
    "url": "plugin/markdown/example.html",
    "revision": "498d2e92badd185965611fe387ad339b"
  },
  {
    "url": "plugin/markdown/markdown.js",
    "revision": "52f549ce458a2e4772e115521024a2f0"
  },
  {
    "url": "plugin/markdown/marked.js",
    "revision": "c2a88705e206d71dc21fdc4445349127"
  },
  {
    "url": "plugin/math/math.js",
    "revision": "a389810e5f83473f6d45612404f77118"
  },
  {
    "url": "plugin/multiplex/client.js",
    "revision": "c80cfcc066962bd50dbcf0f0e53d10f0"
  },
  {
    "url": "plugin/multiplex/index.js",
    "revision": "459b7b22a45cdcaa87fc00d4e1d6192f"
  },
  {
    "url": "plugin/multiplex/master.js",
    "revision": "10bcffc8fb10fd9484e194c5ee74b071"
  },
  {
    "url": "plugin/multiplex/package.json",
    "revision": "dd5887ad60dc63ad2c9a7761df9af3df"
  },
  {
    "url": "plugin/notes-server/client.js",
    "revision": "e6c881ce44aa8872b26d1a4fba48b987"
  },
  {
    "url": "plugin/notes-server/index.js",
    "revision": "3c74e5208fdb9f3dc65532921b8cb9e2"
  },
  {
    "url": "plugin/notes-server/notes.html",
    "revision": "2dbd31ff2a8b3f64d757d9b3482b13d4"
  },
  {
    "url": "plugin/notes/notes.html",
    "revision": "ce604166f04e91164a2bc69304799b0a"
  },
  {
    "url": "plugin/notes/notes.js",
    "revision": "1d0e8037a6f049f48bacf9eba2c82e20"
  },
  {
    "url": "plugin/print-pdf/print-pdf.js",
    "revision": "1b8679396bb20ded3dfaebfd271b82dc"
  },
  {
    "url": "plugin/search/search.js",
    "revision": "b1f3b7ffe438539f8b2c75698fbf2823"
  },
  {
    "url": "plugin/zoom-js/zoom.js",
    "revision": "30230f89bbe2f7994e4b9296b1a57a64"
  },
  {
    "url": "test/examples/assets/image1.png",
    "revision": "15b6c4165b7276f055414e82d1c0cd43"
  },
  {
    "url": "test/examples/assets/image2.png",
    "revision": "2e7b118b2d6804aff4e3f6331af4bd78"
  },
  {
    "url": "test/examples/barebones.html",
    "revision": "c921a08ada1b44b97bead2385f384915"
  },
  {
    "url": "test/examples/embedded-media.html",
    "revision": "ffc37743725ffe2dbf6be6a4d3b8cb1e"
  },
  {
    "url": "test/examples/math.html",
    "revision": "9c488e022061a6168ac4d7beb97ac4cb"
  },
  {
    "url": "test/examples/slide-backgrounds.html",
    "revision": "47f5e536cbf92763737079d54c797500"
  },
  {
    "url": "test/examples/slide-transitions.html",
    "revision": "e55b07b1d8fbdc17f30ff2d885ddf590"
  },
  {
    "url": "test/qunit-1.12.0.css",
    "revision": "7209d607e23e1950f6a343ec17cdfab3"
  },
  {
    "url": "test/qunit-1.12.0.js",
    "revision": "4ce92080c78ec5ae603c7065a94132b3"
  },
  {
    "url": "test/test-markdown-element-attributes.html",
    "revision": "b9536819a68b8da17159672afca23924"
  },
  {
    "url": "test/test-markdown-element-attributes.js",
    "revision": "17bb571afda11a0cc2e21f15c0c75431"
  },
  {
    "url": "test/test-markdown-external.html",
    "revision": "e8f18941a27766ff26b4a2bf265b19c3"
  },
  {
    "url": "test/test-markdown-external.js",
    "revision": "0e36b6e0336941ea349128c93b153c9f"
  },
  {
    "url": "test/test-markdown-options.html",
    "revision": "949e45c717ba678a110a287f68879096"
  },
  {
    "url": "test/test-markdown-options.js",
    "revision": "781c46d98bb12b1a2da593ba9f70288c"
  },
  {
    "url": "test/test-markdown-slide-attributes.html",
    "revision": "7162db741cad843812b82c79f2f4fa27"
  },
  {
    "url": "test/test-markdown-slide-attributes.js",
    "revision": "0ac7b1b36fcf31b21bb585c719f6b3a6"
  },
  {
    "url": "test/test-markdown.html",
    "revision": "9ad045a72b99b558cdd4eb9517e14c69"
  },
  {
    "url": "test/test-markdown.js",
    "revision": "a6234924cb5cbf74dd2d6b38ffc19666"
  },
  {
    "url": "test/test-pdf.html",
    "revision": "cd7031f034786086e49fb712777971ef"
  },
  {
    "url": "test/test-pdf.js",
    "revision": "fa1269a8ba3d70f75a6c6cc147fdc481"
  },
  {
    "url": "test/test.html",
    "revision": "1fc99b82085c54d3e678b9e9801a152f"
  },
  {
    "url": "test/test.js",
    "revision": "f311c8540bb1687f2c293d76be9d2538"
  }
];

const workboxSW = new self.WorkboxSW();
workboxSW.precache(fileManifest);
