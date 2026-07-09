---
id: intro
title: Introduction
sidebar_position: 1
description: Retro OS is a data-driven Windows 95-style in-game operating system for Unity — desktop, windows, terminal, virtual file system, CCTV, mail, a retro browser and a game-event pipeline.
keywords:
  - unity retro os
  - windows 95 unity
  - in-game computer unity
  - unity terminal simulator
  - unity cctv camera system
---

# Retro OS — Introduction

**Retro OS** is a data-driven, Windows 95-style operating system you drop into any Unity
project. It isn't a real OS emulator — it's a desktop shell, window manager, and a set of
in-universe "apps" (terminal, file explorer, mail, CCTV, browser…) driven entirely by
ScriptableObject data, so you can wire an in-game computer into your story without writing
a new UI system for it.

:::info Built from ScriptableObject profiles
Every app, every file in the virtual file system, and every rule that reacts to what the
player does is an asset you author in the Editor — not hardcoded scenes or C# per app.
:::

## What ships in the package

| | |
| --- | --- |
| **Unity** | 2021.3 or newer |
| **Dependencies** | None |
| **Built-in apps** | 10 — File Explorer, Terminal, Photo Gallery, Notepad, Image Viewer, Media Player, CD Player, CCTV, Mail, The Internet |
| **Terminal commands** | 8 — `help`, `ls`, `cd`, `cat`, `open`, `pwd`, `clear`, `decrypt` |
| **Game-event IDs** | 17 |
| **Rule action kinds** | 10 — set/clear flag, reveal/hide/unlock node, deliver mail, open app, show alert, play sound, raise event |
| **UI sounds** | 9, all synthesized at runtime — zero audio assets |
| **Desktop icons** | 13, drawn procedurally at 32×32 — zero image assets |

## Highlights

- **Full desktop shell** — draggable/resizable windows, a taskbar, Start menu and login
  screen, themed with the same raised/sunken Windows 95 bevel palette used across
  Deepwave's other products.
- **Working terminal & virtual file system** — a real command interpreter over a file tree
  you build entirely as assets, including a `decrypt` command for puzzle content.
- **CCTV with in-engine DVR** — camera apps can show a live feed of the actual scene camera
  (pan/zoom), a pre-recorded `VideoClip`, or rewind a 48-frame / 6 fps ring buffer that lets
  *any* live channel be scrubbed back in time with zero pre-authored footage.
- **Story-carrying apps** — Mail, CCTV and The Internet each hold their own content list
  directly on their app definition asset, and every interaction can raise a game event that
  your own rules react to (reveal a node, unlock a file, deliver a new mail, play a sound…).
- **Nothing to import** — all UI sounds are synthesized sine/square waves and all desktop
  icons are drawn from ASCII character maps at runtime, so the package ships with no audio
  or image assets to license.

## Where to go next

- [Tools overview](/tools) — see Retro OS alongside Deepwave's other Unity packages
- The package's own `QuickGuide.html` (included with the `.unitypackage` / Package Manager
  install) covers the full Getting Started walkthrough and every app in detail.
