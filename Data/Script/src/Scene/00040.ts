['Event_00040_00001_Trigger'];
SceneEnter(43);
PartySetPos(55, 112, 0);
FadeOut(0);

['Event_00040_00002_Trigger'];
SetDlgUpper(21, 0, false);
//未知对话
//未知对话
//未知对话
VideoUpdate(0, false);
SetDlgLower(2, 0, false);
//未知对话
//未知对话
VideoUpdate(0, false);
SetDlgUpper(22, 0, false);
//未知对话
//未知对话
//未知对话
//未知对话
VideoUpdate(0, false);
SetDlgLower(1, 0, false);
//未知对话
//未知对话
//未知对话
//未知对话
VideoUpdate(0, false);
SetDlgUpper(21, 0, false);
//未知对话
//未知对话
SetDlgLower(6, 0, false);
//未知对话
//未知对话
VideoUpdate(0, false);
SetDlgUpper(21, 0, false);
//未知对话
//未知对话
//未知对话
//未知对话
//未知对话
VideoUpdate(0, false);
SetDlgLower(1, 0, false);
//未知对话
//未知对话
//未知对话
SetDlgUpper(21, 0, false);
//未知对话
//未知对话
VideoUpdate(0, false);
SetDlgLower(1, 0, false);
//未知对话
//未知对话
//未知对话
//未知对话
VideoUpdate(0, false);
EventSetDirFrame(39, 2, 1, 0);
VideoUpdate(0, false);
SetDlgUpper(0, 0, false);
//未知对话
//未知对话
EventSetDirFrame(39, 2, 0, 0);
VideoUpdate(0, false);
SetDlgUpper(21, 0, false);
//未知对话
//未知对话
//未知对话
//未知对话
//未知对话
//未知对话
//未知对话
//未知对话
//未知对话
//未知对话
VideoUpdate(0, false);
SetDlgLower(1, 0, false);
//未知对话
//未知对话
//未知对话
EventSetState(-1, -1, 0);
HeroSetSprite(2, 7, false);
PartySetRole(3, 1, 0);

['Scene_00040_Enter'];
PartySetPos(50, 61, 1);
Replace();
['Scene_00043_Enter'];
SetPaletteTime(1);
MusicPlay(Music.险境_2, true, false);
SetBattlefield(FbpWin.苏州城郊);
SetBattleMusic(Music.势如破竹);

['Event_00040_00003_Auto'];
WaitEventAutoScriptRun(3, false, false);
PlaySound(79);
WaitEventAutoScriptRun(6, false, false);
GotoWithProbability(40, "Event_00040_00003_Auto");
WaitEventAutoScriptRun(2, false, false);
PlaySound(67);
WaitEventAutoScriptRun(16, false, false);
ReplaceAndPauseWithNop("Event_00040_00003_Auto", 0);

