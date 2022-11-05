// choice by https://iconify.design/icon-sets/
// cut this property.
//   xmlns="http://www.w3.org/2000/svg"
//   xmlns:xlink="http://www.w3.org/1999/xlink"
//   style="-ms-transform: rotate(360deg); -webkit-transform: rotate(360deg); transform: rotate(360deg);"
//   <path fill="#626262"/>

import Search from './ui/search.svelte';

import Expand from './ui/expand.svelte';
import Collapse from './ui/collapse.svelte';

import Standby from './ui/standby.svelte';
import Spinner from './ui/spinner.svelte';
import GoTop from './ui/go-top.svelte';
import Tree from './ui/tree.svelte';
import Pin from './ui/pin.svelte';
import Key from './ui/key.svelte';

import MarkerOn from './ui/marker-on.svelte';
import MarkerOff from './ui/marker-off.svelte';

import TocOn from './ui/toc-on.svelte';
import TocOff from './ui/toc-off.svelte';

import UsersOn from './ui/users-on.svelte';
import UsersOff from './ui/users-off.svelte';

import LinkOn from './ui/link-on.svelte';
import LinkOff from './ui/link-off.svelte';
import Loading from './ui/loading.svelte';

import Logout from './ui/logout.svelte';

const UI = {
	Search,
	Expand,
	Collapse,
	Standby,
	Spinner,
	GoTop,
	Tree,
	Pin,
	Key,
	MarkerOn,
	MarkerOff,
	TocOn,
	TocOff,
	UsersOn,
	UsersOff,
	LinkOn,
	LinkOff,
	Loading,
	Logout
};

import Erase from './ui/erase.svelte';
import Cut from './ui/cut.svelte';
import Copy from './ui/copy.svelte';
import Paste from './ui/paste.svelte';

import Redo from './ui/redo.svelte';
import Undo from './ui/undo.svelte';

const Editor = {
	Erase,
	Cut,
	Copy,
	Paste,
	Redo,
	Undo
};

import SwipeOn from './ui/swipe-on.svelte';
import SwipeOff from './ui/swipe-off.svelte';

import SwipeLR from './ui/swipe-LR.svelte';
import SwipeUD from './ui/swipe-UD.svelte';

import SwipeLeft from './ui/swipe-left.svelte';
import SwipeRight from './ui/swipe-right.svelte';

import SwipeUp from './ui/swipe-up.svelte';
import SwipeDown from './ui/swipe-down.svelte';

import ZoomOut from './ui/zoom-out.svelte';
import ZoomIn from './ui/zoom-in.svelte';

const Gesture = {
	SwipeOn,
	SwipeOff,
	SwipeLR,
	SwipeUD,
	SwipeLeft,
	SwipeRight,
	SwipeUp,
	SwipeDown,
	ZoomOut,
	ZoomIn
};

import TimelineAlert from './ui/timeline-alert.svelte';
import TimelineHelp from './ui/timeline-help.svelte';
import TimelineClock from './ui/timeline-clock.svelte';
import TimelineMinus from './ui/timeline-minus.svelte';
import TimelinePlus from './ui/timeline-plus.svelte';
import TimelineRemove from './ui/timeline-remove.svelte';
import TimelineText from './ui/timeline-text.svelte';

const Timeline = {
	TimelineAlert,
	TimelineHelp,
	TimelineClock,
	TimelineMinus,
	TimelinePlus,
	TimelineRemove,
	TimelineText
};

import BellRinging from './ui/bell-ringing.svelte';
import BellStop from './ui/bell-stop.svelte';
import BellDisable from './ui/bell-disable.svelte';

const Bell = {
	BellRinging,
	BellStop,
	BellDisable
};

import Bold from './text/bold.svelte';
import Emphasis from './text/emphasis.svelte';
import Underline from './text/underline.svelte';

import AlignLeft from './ui/align-left.svelte';
import AlignCenter from './ui/align-center.svelte';
import AlignRight from './ui/align-right.svelte';

import Indent from './text/indent.svelte';
import Outdent from './text/outdent.svelte';
import RemoveFormat from './text/remove-format.svelte';

const Text = {
	Bold,
	Emphasis,
	Underline,
	AlignLeft,
	AlignCenter,
	AlignRight,
	Indent,
	Outdent,
	RemoveFormat
};

import HandFan from './mood/hand-fan.svelte';
import Biohazard from './mood/biohazard.svelte';
import Zombie from './mood/zombie.svelte';
import Ghost from './mood/ghost.svelte';
import Swords from './mood/swords.svelte';
import Sexy from './mood/sexy.svelte';
import Love from './mood/love.svelte';
import Tropical from './mood/tropical.svelte';
import Catwalk from './mood/catwalk.svelte';
import Music from './mood/music.svelte';
import Casino from './mood/casino.svelte';
import Drug from './mood/drug.svelte';
import Gun from './mood/gun.svelte';
import Sun from './mood/sun.svelte';
import Sunrise from './mood/sunrise.svelte';
import Moon from './mood/moon.svelte';

const Mood = {
	HandFan,
	Biohazard,
	Zombie,
	Ghost,
	Swords,
	Sexy,
	Love,
	Tropical,
	Catwalk,
	Music,
	Casino,
	Drug,
	Gun,
	Sun,
	Sunrise,
	Moon
};

import CeroA from './mood/CERO_age_A.svelte';
import CeroB from './mood/CERO_age_B.svelte';
import CeroC from './mood/CERO_age_C.svelte';
import CeroD from './mood/CERO_age_D.svelte';
import CeroZ from './mood/CERO_age_Z.svelte';

const CERO = {
	CeroA,
	CeroB,
	CeroC,
	CeroD,
	CeroZ
};

import Facebook from './logo/facebook.svelte';
import Twitter from './logo/twitter.svelte';
import Windows from './logo/windows.svelte';
import Google from './logo/google.svelte';
import Github from './logo/github.svelte';

const Logo = {
	Facebook,
	Twitter,
	Windows,
	Google,
	Github
};

const Icon = {
	...UI,
	...Gesture,
	...Timeline,
	...Bell,
	...Text,
	...Editor,
	...Mood,
	...CERO,
	...Logo
};

const IconIn = {
	UI,
	Gesture,
	Timeline,
	Bell,
	Text,
	Editor,
	Mood,
	CERO,
	Logo
};

export { Icon, IconIn };
