---
id: intro
title: Introduction
sidebar_position: 1
description: RetroOS is a Windows 95-style in-game operating system for Unity — real-folder drives, a browser that renders your own HTML and CSS, a LAN of machines, CCTV with a DVR, five period games, and an event for everything the player does.
keywords:
  - unity retro os
  - windows 95 unity
  - in-game computer unity
  - unity terminal simulator
  - unity cctv camera system
  - unity in game web browser
  - unity desktop simulator
  - unity virtual file system
---

# RetroOS — Introduction

**RetroOS** is a Windows 95-style computer you drop into a Unity scene. Not a picture of
one: windows that drag and resize, drives that are real folders on your disk, a browser
that renders the actual HTML and CSS files you wrote, a LAN of machines that stop serving
when you switch them off, and an event for every single thing the player does inside it.

Drop one component into a scene, press Play, and you have a working computer.

:::info One thing in the game is one component
A computer, the system installed on it and the screen its picture comes out on are the
same object. Programs are components you add underneath it — there is no profile asset to
maintain, and two scenes can install different software without either of them owning a
list.
:::

## What ships in the package

| | |
| --- | --- |
| **Unity** | 2022.3 or newer, including Unity 6 |
| **Dependencies** | None. uGUI only — no TextMeshPro, no custom shaders |
| **Render pipelines** | Built-in, URP and HDRP — it draws nothing pipeline-specific |
| **Built-in programs** | 19, plus a host component for a program you build yourself |
| **Games** | 5 — Mines, Solitaire, FreeCell, Reversi, Snake |
| **Terminal commands** | 8 — `help`, `ls`, `cd`, `cat`, `open`, `pwd`, `clear`, `decrypt` — plus your own, written in the inspector |
| **Game-event IDs** | 39 |
| **Rule action kinds** | 18 — flags, revealing and unlocking files, mail, launching a program, alerts, sounds, the blue screen, log off, shut down, taking a site off the air… |
| **Colour schemes** | 14 of the originals, switchable at runtime from the Control Panel |
| **UI sounds** | 9, all synthesized at runtime — zero audio assets |
| **Icons** | 71, painted from code at 32, 48 or 64 px — zero image assets |

## Highlights

- **A desktop, not a mock-up** — draggable, resizable, minimizable windows clamped to the
  work area, a taskbar with live window buttons, a Start menu with hover fly-outs, and
  25+ reusable Windows 95 controls you can build your own programs out of.

- **A file system made of real folders** — a machine's drives are the folders inside its
  folder: `C` is the C: drive, `A` the floppy, `D` the CD. Drop a `.txt` into one and it is
  in the game. No import step, no asset, no Unity restart. Per-file properties — hidden,
  encrypted, password, owner, note — live in a `.rmeta` sidecar you can edit in Unity's
  Inspector or in Notepad.

- **A browser that renders your real pages** — write a site in any editor, check it in
  Chrome, drop the folder into `internet/`, and the address the player types is the folder
  name. Real HTML and CSS, working inline links, images, and the era's torn-page
  placeholder when a picture is missing.

- **A LAN of machines, not a folder called `lan`** — every computer in your game is a
  component with a name, an address and a folder of drives. A share is one line in a
  folder's own `.rmeta` — `share: ARCHIVE` — so a folder copied to another machine arrives
  shared. Switch that machine off and the share vanishes from Explorer mid-game, because
  that is what pulling the plug on a file server does. The player can share folders too,
  from Explorer's right-click **Sharing…** dialog.

- **A machine that starts and stops like one** — a logon screen, and Start ▸ Log Off and
  Start ▸ Shut Down that ask first, tear the desktop down, hold the please-wait notice and
  either come back to the logon box or fade the glass to a dead monitor. Your game keeps
  running the whole time; `PowerOn()` boots the machine again.

- **CCTV with an in-engine DVR** — point a channel at a `Camera` in your 3D level and it
  renders live, with pan and zoom that actually move that camera. Or play a recorded clip.
  Or rewind the live feed on a ring buffer, so any channel can be scrubbed back in time
  with no pre-authored footage.

- **Every click is a game event** — `os.boot`, `os.login`, `os.shutdown`, `file.opened`,
  `node.unlocked`, `terminal.command`, `web.visited`, `mail.read`, `disc.inserted` and the
  rest. React to them three ways, whichever suits the person doing the work: no-code rules
  in the inspector, UnityEvents on the component, or C#.

- **Runs on the glass of a 3D monitor** — the whole OS is drawn once into a RenderTexture
  you hang on a CRT model, lit by your own emissive glass material. An on-screen cursor
  mode walks a drawn pointer across the tube with the mouse, a gamepad stick or a dragging
  finger; sitting down flips to a pixel-exact fullscreen overlay.

- **Nothing to import** — every UI sound is synthesized and every icon is painted from
  code, so the package ships with no audio or image assets to license. The same painter
  gives each component its own pixel-art icon in the Inspector.

## Where to go next

- [Tools overview](/tools) — see RetroOS alongside Deepwave's other Unity packages
- The package's own `README.md` (included with the `.unitypackage` / Package Manager
  install) covers the full walkthrough and every program in detail.
