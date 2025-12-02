['Event_00229_00001_Trigger'];
SceneEnter(230);
PartySetPos(10, 108, 1);
FadeOut(0);

['Event_00229_00002_Trigger'];
SceneEnter(215);
PartySetPos(23, 11, 1);
FadeOut(0);

['Scene_00229_Enter'];
SetBattlefield(FbpWin.毒仙林);
SetBattleMusic(Music.战意昂_副本);
MusicPlay(Music.救黎民, true, false);

['Event_00229_00014_Trigger'];
BattleStart(316, "@A073", "");
EventSetStateSequence(228, 14, 228, 15, 0);
EventSetStateSequence(228, 32, 228, 33, 2);

['Event_00229_00018_Trigger'];
BattleStart(318, "@A073", "");
EventSetStateSequence(228, 18, 228, 19, 0);
EventSetStateSequence(228, 34, 228, 35, 2);

['Event_00229_00020_Trigger'];
BattleStart(319, "@A073", "");
EventSetStateSequence(228, 20, 228, 21, 0);
EventSetStateSequence(228, 36, 228, 37, 2);

['Event_00229_00026_Trigger'];
BattleStart(319, "@A073", "");
EventSetStateSequence(228, 26, 228, 27, 0);
EventSetStateSequence(228, 38, 228, 39, 2);

['Event_00229_00028_Trigger'];
BattleStart(318, "@A073", "");
EventSetStateSequence(228, 28, 228, 29, 0);
EventSetStateSequence(228, 40, 228, 41, 2);

['Event_00229_00012_Trigger'];
BattleStart(239, "@A073", "");
EventSetStateSequence(228, 12, 228, 13, 0);
EventSetStateSequence(228, 30, 228, 31, 2);

['Event_00229_00003_Trigger'];
SetDlgCenter(0, false);
//未知对话

['Event_00229_00030_Trigger'];
//未知对话
//未知对话
//未知对话
//未知对话

['Event_00229_00038_Trigger'];
//未知对话
//未知对话
//未知对话
//未知对话

['Event_00229_00032_Trigger'];
//未知对话

['Event_00229_00016_Auto'];
NpcSetFrame(0);
GotoWithProbability(55, "");
NpcSetFrame(2);
NpcSetFrame(1);
ReplaceAndPause();
NpcSetFrame(2);
WaitEventAutoScriptRun(2, false, false);
NpcSetFrame(1);
WaitEventAutoScriptRun(2, false, false);
NpcSetFrame(0);
GotoWithProbability(55, "");
NpcSetFrame(3);
ReplaceAndPauseWithNop("Event_00229_00016_Auto", 0);

['Event_00229_00012_Auto'];
NpcSetFrame(0);
ReplaceAndPause();
NpcSetFrame(1);
ReplaceAndPause();
GotoWithProbability(50, "Event_00229_00012_Auto");
['@8F74'];
NpcSetFrame(0);
ReplaceAndPause();
NpcSetFrame(2);
ReplaceAndPause();
GotoWithProbability(50, "Event_00229_00012_Auto");
GotoWithNop("@8F74", 0);

['Event_00229_00044_Auto'];
GotoWithProbability(33, "");
GotoWithProbability(60, "@976A");
GotoWithProbability(55, "@976C");
GotoWithProbability(50, "@976E");
GotoWithProbability(50, "@9770");
ReplaceAndPauseWithNop("Event_00229_00044_Auto", 0);
['@976A'];
PlaySound(18);
ReplaceAndPauseWithNop("Event_00229_00044_Auto", 0);
['@976C'];
PlaySound(17);
ReplaceAndPauseWithNop("Event_00229_00044_Auto", 0);
['@976E'];
PlaySound(16);
ReplaceAndPauseWithNop("Event_00229_00044_Auto", 0);
['@9770'];
PlaySound(15);
ReplaceAndPauseWithNop("Event_00229_00044_Auto", 0);

SetDlgBox(0);
//未知对话

SetDlgBox(0);
//未知对话

SetDlgBox(0);
//未知对话

['Event_00229_00042_Auto'];
NpcChase(12, 0, false);
GotoWithNop("Event_00041_00003_Auto", 0);

