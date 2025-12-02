['Scene_00246_Enter'];
PlaySound(256);
PartySetPos(39, 46, 0);
VideoUpdate(0, false);
//未知对话
//未知对话
SetRng(8);
PlaySound(256);
FadeOut(0);
PlayRng(0, 0, 8);
PlaySound(256);
FadeOut(0);
EventSetState(245, 3, 1);
EventSetState(245, 4, 1);
EventSetStateSequence(245, 7, 245, 15, 1);
PartySetPos(26, 61, 0);
VideoUpdate(0, false);
//未知对话
//未知对话
//未知对话
PlaySound(256);
WaitEventAutoScriptRun(30, false, false);
PlaySound(256);
WaitEventAutoScriptRun(10, false, false);
EventSetDirFrame(245, 7, 0, 0);
WaitEventAutoScriptRun(0, false, false);
SetDlgLower(81, 0, false);
//未知对话
//未知对话
PlaySound(256);
VideoFadeAndUpdate(-2);
HeroSetSprite(0, 232, true);
SceneEnter(228);

['Event_00246_00008_Auto'];
GotoWithProbability(30, "");
NpcSetDirFrame(0, 0);
['@7D06'];
EventWalkOneStep(-1, -1, -8, 4);
GotoWithNop("@7D06", 0);

['Event_00246_00010_Auto'];
WaitEventAutoScriptRun(10, false, false);
ReplaceAndPauseWithNop("Event_00246_00008_Auto", 0);

['Event_00246_00011_Auto'];
WaitEventAutoScriptRun(5, false, false);
ReplaceAndPauseWithNop("Event_00246_00008_Auto", 0);

['Event_00246_00014_Auto'];
WaitEventAutoScriptRun(4, false, false);
ReplaceAndPauseWithNop("Event_00246_00008_Auto", 0);

['Event_00246_00015_Auto'];
WaitEventAutoScriptRun(7, false, false);
ReplaceAndPauseWithNop("Event_00246_00008_Auto", 0);

