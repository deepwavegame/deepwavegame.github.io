import React from 'react';
import { STORE, ITCH } from '@site/src/lib/brands';

export const TOOL_TYPES = {
  UNITY_PACKAGE: 'UNITY PACKAGE',
  BLENDER_ADDON: 'BLENDER ADDON',
};

const tools = [
  {
    id: 'infinite-corrugated-roof',
    type: TOOL_TYPES.UNITY_PACKAGE,
    title: 'Infinite Corrugated Roof',
    tagline: 'Procedural corrugated metal roofs for Unity.',
    description:
      'Generate production-ready corrugated metal roofs from a single component — live-edited panels, animation-curve wave profiles, Perlin weathering, optional spline deformation, an automatic 3-level LOD system and one-click FBX baking.',
    thumbnail: '/img/products/tools/infinite-corrugated-roof/Dd6Gwv.jpg',
    links: {
      page: '/tools/infinite-corrugated-roof',
      assetStore: STORE.infiniteCorrugatedRoof,
      itch: ITCH.infiniteCorrugatedRoof,
      docs: '/docs/tools/infinite-corrugated-roof/intro',
    },
    specs: {
      price: '$12.69',
      version: 'v1.1.0',
      size: '68.9 MB',
      requirement: 'Unity 2021.3+',
    },
    seo: {
      canonical: STORE.infiniteCorrugatedRoof,
      description:
        'Infinite Corrugated Roof generates production-ready corrugated metal roofs in Unity — live-edited panels, animation-curve wave profiles, Perlin weathering, spline deformation, an automatic 3-level LOD system and one-click FBX baking. Built-in, URP & HDRP.',
      keywords:
        'unity corrugated roof, procedural roof unity, metal sheet generator, industrial roof asset, corrugated metal, LOD roof, spline roof, fence builder, unity environment tool, deepwave',
    },
    isUnderDevelopment: false,
    features: [
      {
        title: 'Live Panel Generation',
        description:
          'Size the roof with a grid of overlapping panels — every field rebuilds the mesh instantly in the Editor, with zero GC pressure between edits.',
      },
      {
        title: 'Curve-Driven Wave Profiles',
        description:
          'Shape the corrugation cross-section with any AnimationCurve — round, trapezoidal or asymmetric — plus Perlin surface noise for believable weathering.',
      },
      {
        title: 'Spline Deformation',
        description:
          'Bend the roof along a SplineContainer with three modes — smooth deform, flat-per-panel, or rigid chain-follow (optional Unity Splines package).',
      },
      {
        title: 'LOD System & FBX Baking',
        description:
          'An automatic 3-level LODGroup keeps distant roofs cheap, and one-click FBX baking ships a static, deterministic mesh for final builds.',
      },
    ],
  },
  {
    id: 'simple-painter',
    type: TOOL_TYPES.UNITY_PACKAGE,
    title: 'Simple Painter',
    tagline: 'Runtime 3D texture-painting toolkit for Unity.',
    description:
      'Listed on the Asset Store as Simple Paint 3D, this modular toolkit paints directly onto meshes at runtime — multi-channel PBR painting, Photoshop-style layers, five stroke methods, six input devices and three physically-simulated fluid-paint solvers.',
    thumbnail: '/img/products/tools/simple-painter/thumbnail.jpg',
    links: {
      page: '/tools/simple-painter',
      assetStore: STORE.simplePainter,
      docs: '/docs/tools/simple-painter/intro',
      demos: [
        { label: 'PLAY DEMO 1', href: ITCH.simplePainterDemo },
        { label: 'PLAY DEMO 2', href: ITCH.simplePainterDemo2 },
      ],
    },
    specs: {
      price: '$47.65',
      version: 'v0.2.2',
      size: '87.4 MB',
      requirement: 'Unity 2021.3+',
    },
    seo: {
      canonical: STORE.simplePainter,
      description:
        'Simple Painter (Simple Paint 3D) is a runtime 3D texture-painting toolkit for Unity: multi-channel PBR painting, Photoshop-style layers, five stroke methods, six input devices and three physically-simulated fluid-paint solvers. Built-in, URP & HDRP.',
      keywords:
        'unity texture painting, runtime paint tool unity, 3d texture painting unity, simple paint 3d, PBR channel painting, unity fluid paint, uv seam fix unity, unity decal paint, paint on skinned mesh, deepwave simple painter',
    },
    isUnderDevelopment: false,
    features: [
      {
        title: 'Multi-Channel PBR Painting',
        description:
          'Paint Color, Scalar (metallic, smoothness, AO…) and Normal channels independently — each bound to any shader property you define.',
      },
      {
        title: 'Photoshop-Style Layers',
        description:
          'Every channel holds its own stack of layers with visibility, opacity, a starting texture and a blend mode matched to its data type.',
      },
      {
        title: 'Six Input Devices',
        description:
          'Mouse, pressure-sensitive Pen, Touch, physics Collision, Particle (with an optional pierce-through mode) and a transform-driven Object device all feed the same stroke pipeline.',
      },
      {
        title: 'Five Stroke Methods',
        description:
          'Direct freehand, live-following Drag Dot, rubber-band Line, smoothed Bezier curves and a resizable Anchored decal — all hot-swappable at runtime.',
      },
      {
        title: 'Three Fluid Simulation Solvers',
        description:
          'Drop-in GPU solvers for a SimulationCanvas: viscous MLS-MPM paint, an Eulerian vorticity-confined ink bloom, and a cheap height-field drip/run model.',
      },
      {
        title: 'Automatic UV Seam Fixing',
        description:
          'A geometric analyzer stitches disconnected UV islands so strokes never show a gap or hard edge at a seam — even on skinned characters.',
      },
    ],
  },
  {
    id: 'retro-os',
    type: TOOL_TYPES.UNITY_PACKAGE,
    title: 'RetroOS',
    tagline: 'Windows 95-style in-game operating system for Unity.',
    description:
      'A Windows 95-style computer you drop into a Unity scene — not a picture of one. Windows that drag and resize, drives that are real folders on your disk, a browser that renders the HTML and CSS files you actually wrote, a LAN of machines that stop serving when you switch them off, CCTV wired to live scene cameras, five period games, and an event for everything the player does. Programs are components you add under the machine; there is no profile asset to maintain.',
    thumbnail: null,
    links: {
      page: '/tools/retro-os',
      docs: '/docs/tools/retro-os/intro',
    },
    specs: {
      price: '$49.99',
      version: 'v1.1.0',
      requirement: 'Unity 2022.3+',
    },
    seo: {
      description:
        'A working Windows 95-style OS inside your Unity game: drives that are real folders, a browser that renders your own HTML and CSS, a LAN, CCTV, and 5 period games.',
      keywords:
        'unity retro os, windows 95 unity, in-game computer unity, fake os unity asset, unity terminal simulator, unity cctv camera system, unity in game web browser, unity render html in ui, found footage horror unity, unity desktop simulator, unity virtual file system, deepwave retro os, wave0084',
      faq: [
        {
          q: 'Are the UI elements sprites or PSDs, or drawn from code?',
          a: 'The entire interface is drawn at runtime in C# on Unity UI (uGUI) — window chrome, the 71 icons, scroll bars and dithers are all painted procedurally. There is no texture atlas or PSD for the interface. One RetroTheme asset controls every colour, metric and font, and full C# source is included. It renders on Built-in, URP and HDRP unchanged, with no custom shaders and no TextMeshPro dependency.',
        },
        {
          q: 'Is there a real file system you can use at runtime?',
          a: "Yes. A machine's drives are real folders on disk (C, A floppy, D CD, plus network drives). A File Explorer app does New Folder, New Text Document, rename, delete, cut/copy/paste and a Sharing dialog, and a terminal runs the usual shell commands over the same file system. Per-user privacy is enforced. In a build the content is copied into the player's Documents folder on first run, so it stays writable and moddable.",
        },
        {
          q: 'Is this a framework to build on, or a preconfigured UI system?',
          a: 'A functional framework. A program is a component you drop under the OS object; your own app is about fifteen lines. There is an OS-wide event bus with no-code rules, an HTML/CSS browser engine that renders the files you drop into internet/, a LAN of real machines where powering one off drops its share from the others live, plus mail, CCTV with a DVR wired to live scene cameras, a terminal and five period games. It ships with a demo machine so it runs on import, but it is built to be extended.',
        },
        {
          q: 'Which Unity versions and render pipelines are supported?',
          a: 'Unity 2022.3 LTS and newer, including Unity 6. The OS is uGUI and draws nothing pipeline-specific, so it works on Built-in, URP and HDRP. The only caveat is the 3D demo scene, whose own materials are URP and need their shaders re-assigned in a Built-in or HDRP project.',
        },
      ],
    },
    isUnderDevelopment: false,
    features: [
      {
        title: 'A Desktop, Not a Mock-up',
        description:
          'Draggable, resizable windows clamped to the work area, a taskbar with live window buttons, a Start menu with hover fly-outs, and 25+ reusable Windows 95 controls to build your own programs from. It logs on, logs off and shuts down like a machine, fading the glass to a dead monitor while your game keeps running.',
      },
      {
        title: 'Drives Are Real Folders',
        description:
          'A machine\u2019s drives are the folders inside its folder \u2014 C is the C: drive, A the floppy, D the CD. Drop a .txt in and it is in the game: no import step, no asset, no restart. Hidden, encrypted, password, owner and sharing live in a .rmeta sidecar you edit in the Inspector or in Notepad.',
      },
      {
        title: 'A Browser That Renders Your Own Pages',
        description:
          'Write a site in any editor, check it in Chrome, drop the folder into internet/ \u2014 and the address the player types is the folder name. Real HTML and CSS, working inline links, images, and the era\u2019s torn-page placeholder when a picture is missing.',
      },
      {
        title: 'A LAN of Machines, Not a Folder Called lan',
        description:
          'Every computer is a component with a name, an address and a folder of drives. A share is one line in a folder\u2019s own sidecar, so a folder copied to another machine arrives shared \u2014 and players can share folders themselves from Explorer. Switch a machine off and its shares vanish from Explorer mid-game.',
      },
      {
        title: 'CCTV, Games and the Glass of a 3D Monitor',
        description:
          'Point a channel at a scene Camera and it renders live, with pan and zoom that move the real camera, plus a DVR buffer any channel can be scrubbed back through. Five period games on public-domain rules. The whole OS is drawn once into a RenderTexture you hang on a CRT model, with an on-screen cursor walked across the glass by the mouse, a gamepad stick or touch.',
      },
      {
        title: 'Every Click Is a Game Event',
        description:
          '39 event IDs and 18 rule actions, answered three ways so each person on the team can use the one that suits them: no-code rules in the inspector, UnityEvents on the component, or C#. Nine UI sounds synthesized at runtime and 71 icons painted from code \u2014 nothing to import, nothing to license.',
      },
    ],
  },
  {
    id: 'cobweb-weaver',
    type: TOOL_TYPES.UNITY_PACKAGE,
    title: 'Cobweb Weaver',
    tagline: 'A brush that places spider webs onto your geometry.',
    description:
      'An editor tool that paints pre-made spider webs onto the geometry you already built. Drag over a wall and each web nails itself to the corners and beams that are actually there, picking its own shape \u2014 sheet, corner, cluster or drape \u2014 from the space under the cursor. 66 verts a web, meshes generated never serialised, pins editable in 3D, and the room exports to FBX. Every mesh carries Deepwave Wind Dynamics\u2019 fabric vertex layout, so wind is a material assignment.',
    thumbnail: null,
    links: {
      page: '/tools/cobweb-weaver',
      docs: '/docs/tools/cobweb-weaver/intro',
    },
    specs: {
      price: '$34.99',
      version: 'v1.0.0',
      requirement: 'Unity 6000.3+',
    },
    seo: {
      description:
        'A Unity editor tool: a brush that places pre-made spider webs onto your existing geometry, nailing each to the walls and beams around the cursor. Exports to FBX.',
      keywords:
        'unity spider web, unity cobweb, unity cobweb tool, paint cobwebs unity, spiderweb generator unity, unity scene dressing tool, unity cobweb fbx export, spider web wind unity, low poly spider web unity, deepwave cobweb weaver',
      faq: [
        {
          q: 'How is this different from Spiderweb Generator or Dynamic Spider Web?',
          a: 'Different job. Those generate a web — strands, or runtime cut/burn/tear. Cobweb Weaver places a hundred pre-made webs, 66 vertices each, attached to the room and merged to a couple of renderers, and the finished room exports to FBX. If you need webs the player destroys at runtime, use one of those. For dressing a level fast and shipping it static, use this. You can own both.',
        },
        {
          q: 'Will it slow my game down?',
          a: 'Nothing runs per frame. One Awake merges the webs under a root into a handful of renderers — by style and by a 12 m cube so the level still culls room by room — and then it is finished. A web is 66 vertices, and the meshes are generated at load rather than written into your scene file.',
        },
        {
          q: 'It says it does not touch materials — how do the webs look like silk?',
          a: 'The sample ships a silk shader for Built-in, Universal and HDRP. The package generates meshes and stops there, deliberately, so it can never overwrite a material you own. Any material will draw the silk. To make the webs move, assign Deepwave/WindDynamics/Fabric — the vertex layout already matches, with no preparation step — or use the sample wind driver.',
        },
        {
          q: 'What Unity version does it need?',
          a: 'Unity 6000.3 or newer. There is no back-port to 2021, 2022 or earlier Unity 6. Universal RP 17.3 is a package dependency even for a Built-in project, because it guarantees the core shader library the sample uses, but the project itself runs on Built-in, Universal or HDRP.',
        },
        {
          q: 'Can I use my own web textures?',
          a: 'Yes, and it is a first-class path. Any grid of webs works — white silk in RGB, the web in alpha. Create a Cobweb Style, assign the texture, set the grid and press Read Sheet.',
        },
      ],
    },
    isUnderDevelopment: false,
    features: [
      {
        title: 'A Brush That Reads the Room',
        description:
          'Drag over any geometry in the scene view. Each dab casts a fan of rays out of the surface under the cursor, measures how enclosed the space is, and picks one of four forms on its own \u2014 sheet, corner, cluster or drape. The cursor shows the resolved form before you click.',
      },
      {
        title: 'Anchors Read From the Artwork',
        description:
          'A cobweb sheet holds nine webs. The tool reads where each one\u2019s silk runs off its cell out of the alpha channel, then raycasts each anchor into your scene. Rays that hit become pins; rays that miss hang free and carry the sag.',
      },
      {
        title: '66 Vertices a Web',
        description:
          'Against ~12,000 for a strand generator. 97 placed webs merge to 2 renderers in one Awake, by style and 12 m chunk. Meshes are generated at load and never written into the scene file \u2014 77% off the sample scene.',
      },
      {
        title: 'Pins Editable in 3D, Then Export to FBX',
        description:
          'Multi-select pins, drag them anywhere in three dimensions, and the cloth rebuilds as you drag. A finished room exports to one FBX \u2014 welded, or a mesh per web \u2014 with a four-component UV that survives the round trip. Unity\u2019s FBX Exporter is not required.',
      },
      {
        title: 'The Silk Already Speaks Wind Dynamics',
        description:
          'Every built mesh carries Deepwave Wind Dynamics\u2019 fabric vertex layout, so assigning that package\u2019s Fabric material is the whole setup for wind. Wind Dynamics is optional and nothing here depends on it. Sample silk shader for Built-in, Universal and HDRP.',
      },
    ],
  },
  {
    id: 'dynamic-target-framer',
    type: TOOL_TYPES.UNITY_PACKAGE,
    title: 'Dynamic Target Framer',
    tagline: 'Pixel-tight UI framing for whatever the player is looking at.',
    description:
      'Puts a clean, dynamic bounding box on screen around whatever 3D object the player is aiming at. The frame is built from the object’s real mesh or MeshCollider vertices, not a loose world-space box, so it stays as tight as possible from every camera angle. The Runtime only measures and publishes the result as data — how it’s drawn is entirely up to you, with a drop-in reference view included.',
    thumbnail: null,
    links: {
      page: '/tools/dynamic-target-framer',
      docs: '/docs/tools/dynamic-target-framer/intro',
    },
    specs: {
      price: '$5.69',
      version: 'v1.0.0',
      size: '0.3 MB',
      requirement: 'Unity 6000.0+',
    },
    seo: {
      description:
        'Dynamic Target Framer draws a pixel-tight UI frame around any 3D object on screen. Mesh-accurate, allocation-free, and presentation-agnostic — the Runtime only publishes screen-space frame data, so you can wire in your own look on Built-in, URP or HDRP.',
      keywords:
        'unity target framer, unity bounding box ui, look at highlight unity, unity selection frame, unity interaction prompt, mesh accurate bounding box, unity crosshair target, unity ui frame object, allocation free unity ui, deepwave dynamic target framer',
    },
    isUnderDevelopment: false,
    features: [
      {
        title: 'Mesh-Accurate Fit',
        description:
          'Projects the target’s real mesh or MeshCollider vertices to screen space — not a loose world-space AABB — so the frame hugs the silhouette from every angle.',
      },
      {
        title: 'Presentation-Agnostic Core',
        description:
          'The Runtime component only measures and publishes a TargetFrame (a screen-space rectangle). It never references uGUI, so any renderer — yours or ours — can consume it.',
      },
      {
        title: 'Drop-In Reference View',
        description:
          'The included TargetFrameView sample reproduces padding, smoothing and idle states in one component — copy it as a starting point for your own look.',
      },
      {
        title: 'Zero Steady-State GC',
        description:
          'Mesh vertices are cached once per mesh and the box is only recalculated when the camera or target actually moves — built for low-end and mobile.',
      },
    ],
  },
  {
    id: 'analog-vhs',
    type: TOOL_TYPES.UNITY_PACKAGE,
    title: 'Analog VHS',
    tagline: 'Retro VHS & CRT post-processing for Unity.',
    description:
      'Turns any camera into a worn tape deck, a broadcast monitor or a haunted camcorder. Nine modules render inline on the camera component itself — no profile asset in the middle, so what the inspector shows is what renders — covering the whole signal path from real lens chromatic aberration and lens dirt through a single Colour Grade module to a CRT screen with beam reconstruction and a 15-architecture phosphor mask. Built-in, URP and HDRP, with 20 ready-made presets and a one-click pipeline setup tool.',
    thumbnail: null,
    links: {
      page: '/tools/analog-vhs',
      assetStore: STORE.analogVhs,
      docs: '/docs/tools/analog-vhs/intro',
    },
    specs: {
      price: '$27.65',
      version: 'v1.3.0',
      requirement: 'Unity 6000.0+',
    },
    seo: {
      canonical: STORE.analogVhs,
      description:
        'Analog VHS is a retro post-processing effect for Unity 6: real lens chromatic aberration, film grain, tracking loss, bandwidth-limited composite color and a CRT screen model with beam reconstruction and phosphor mask — all on one camera component, no profile asset. Built-in, URP & HDRP, 20 presets.',
      keywords:
        'unity vhs shader, unity crt shader, retro post processing unity, analog horror unity, vhs effect unity, composite video unity, scanline shader unity, tracking loss effect, unity found footage horror, unity chromatic aberration shader, unity phosphor mask crt, deepwave analog vhs',
    },
    isUnderDevelopment: false,
    features: [
      {
        title: 'Nine Modules, No Profile Asset',
        description:
          'Lens, Retro Resolution, Tape Artifacts, Distortion, Composite Signal, Colour Quantization, Colour Grade, Bloom and CRT Screen, in the order light travels through them — serialized directly on the camera, so a slider you drag in Play mode changes the picture instead of quietly editing a shared asset.',
      },
      {
        title: 'Real Lens Chromatic Aberration & Dirt',
        description:
          'Lateral dispersion sampled as a spectral smear from the optical axis — zero in the centre, widening toward the corners — plus lens dirt lit by the halation behind it.',
      },
      {
        title: 'One Place For Colour',
        description:
          'Tape levels, chroma response, exposure, lift/gamma/gain, saturation and split toning all live in one Colour Grade module, folded to two gain/offset pairs and a matrix on the CPU — 13 built-in looks included.',
      },
      {
        title: 'CRT Screen Model',
        description:
          'Beam reconstruction that rebuilds every pixel from the two raster lines around it, a 15-architecture phosphor mask, radial beam convergence error, edge-pinned barrel curvature and phosphor afterglow.',
      },
      {
        title: 'Analog-Horror Toolkit',
        description:
          'A drifting tracking line that collapses a band of rows onto one, per-line hue phase error, wavy scanline distortion and one-sided horizontal tape smear.',
      },
      {
        title: '20 Ready-Made Presets',
        description:
          'From a clean VCR to full signal chaos, plus a demo scene with first-person controls and a live settings menu that exposes every parameter.',
      },
    ],
  },
  {
    id: 'blender-horror-exporter',
    type: TOOL_TYPES.BLENDER_ADDON,
    title: 'Horror Asset Exporter',
    tagline: 'Automated pipeline for exporting horror-ready assets from Blender.',
    description:
      'One-click export with optimized LODs, material assignments, and collider generation for Unity/Unreal.',
    thumbnail:
      'https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?auto=format&fit=crop&w=800&q=80',
    links: {
      page: '/tools/blender-horror-exporter',
      blenderMarket: 'https://blendermarket.com/products/example',
      itch: 'https://deepwave.itch.io/horror-exporter',
      docs: '#',
    },
    specs: {
      price: '$19.00',
      version: 'v1.0.5',
      size: '0.5 MB',
      requirement: 'Blender 3.6 - 4.1',
    },
    isUnderDevelopment: true,
    features: [
      {
        title: 'Auto-LOD',
        description: 'Generate optimized mesh levels automatically.',
      },
      {
        title: 'PBR Mapping',
        description: 'One-click material conversion for HDRP/URP.',
      },
    ],
  },
];

export default tools;

export const getTool = (id) => tools.find((t) => t.id === id);
