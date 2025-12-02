['Enemy_00102_TurnStart'];
JumpIfHeroInParty(2, "@A005");

['Enemy_00012_TurnStart'];
JumpIfEnemyNotFirstOfKind("");
PlaySound(205);
//未知对话
//未知对话
ReplaceAndPause();
//未知对话
//未知对话
ReplaceAndPause();

['Enemy_00012_Action'];
ReplaceAndPause();
GotoWithProbability(60, "");
EnemySummonMonster(433, 0, "");
EnemySetMagic(-1, 0);
ReplaceAndPause();
EnemySetMagic(0, 0);
ReplaceAndPause();
EnemySummonMonster(433, 0, "");
EnemySetMagic(-1, 0);
ReplaceAndPause();
EnemySummonMonster(407, 2, "");
EnemySetMagic(-1, 0);
ReplaceAndPause();
EnemySetMagic(0, 0);
ReplaceAndPause();
ReplaceAndPause();
ReplaceAndPause();
ReplaceAndPauseWithNop("Enemy_00012_Action", 0);

['Enemy_00005_Won'];
AddItem(44, 0);
SetDlgBox(0);
//未知对话

['Enemy_00004_Won'];
GotoWithProbability(20, "");
AddItem(27, 0);
SetDlgBox(0);
//未知对话

['Enemy_00003_Won'];
GotoWithProbability(22, "");
AddItem(39, 0);
SetDlgBox(0);
//未知对话

['Enemy_00007_Won'];
GotoWithProbability(16, "");
AddItem(71, 0);
SetDlgBox(0);
//未知对话

['Enemy_00006_Won'];
GotoWithProbability(12, "");
AddItem(55, 0);
SetDlgBox(0);
//未知对话

['Enemy_00012_Won'];
AddItem(37, 0);
SetDlgBox(0);
//未知对话

['Enemy_00071_TurnStart'];
SetDlgUpper(48, 0, false);
//未知对话
//未知对话
SetDlgLower(23, 0, false);
//未知对话
//未知对话
EnemySetMagic(-1, 0);
ReplaceAndPause();
SetDlgUpper(48, 0, false);
//未知对话
//未知对话
SetDlgLower(23, 0, false);
//未知对话
ReplaceAndPause();
SetDlgUpper(48, 0, false);
//未知对话
//未知对话
EnemySetMagic(56, 0);
ReplaceAndPause();
ReplaceAndPause();
ReplaceAndPause();
ReplaceAndPause();
BattleEnemyEscape();

['Enemy_00105_TurnStart'];
EnemySetMagic(-1, 0);
SetDlgLower(5, 0, false);
//未知对话
//未知对话
SetDlgUpper(24, 0, false);
//未知对话
VideoUpdate(0, false);
SetDlgUpper(90, 0, false);
//未知对话
BattleEnemyEscape();
SetDlgBox(0);
//未知对话

['Enemy_00057_TurnStart'];
JumpIfEnemyNotFirstOfKind("");
SetDlgLower(9, 0, false);
//未知对话
//未知对话
SetDlgUpper(11, 0, false);
//未知对话
//未知对话
VideoUpdate(0, false);
SetDlgLower(1, 0, false);
//未知对话
SetDlgUpper(17, 0, false);
//未知对话
EnemySetScript(57, EnemyScript.TurnStart, "");
ReplaceAndPause();

['Enemy_00088_TurnStart'];
JumpIfHeroInParty(2, "@A144");

['Enemy_00083_TurnStart'];
SetDlgUpper(23, 0, false);
//未知对话
SetDlgLower(5, 0, false);
//未知对话
//未知对话
VideoUpdate(0, false);
SetDlgUpper(22, 0, false);
//未知对话
//未知对话
VideoUpdate(0, false);
SetDlgLower(9, 0, false);
//未知对话
//未知对话
//未知对话
SetDlgUpper(22, 0, false);
//未知对话
ReplaceAndPause();

['Enemy_00086_TurnStart'];
SetDlgUpper(22, 0, false);
//未知对话
VideoRestore();
//未知对话
//未知对话
//未知对话
VideoUpdate(0, false);
SetDlgLower(1, 0, false);
//未知对话
//未知对话
//未知对话
VideoUpdate(0, false);
SetDlgUpper(21, 0, false);
//未知对话
//未知对话
SetDlgLower(9, 0, false);
//未知对话
//未知对话
MusicStop(1);
VideoUpdate(0, false);
SetDlgUpper(21, 0, false);
//未知对话
PlaySound(213);
Delay(20);
MusicPlay(Music.势如破竹_副本, true, false);
ReplaceAndPause();

['Enemy_00081_TurnStart'];
JumpIfHeroInParty(3, "@A1CD");
ReplaceAndPause();
PlaySound(193);
SetDlgUpper(41, 0, false);
//未知对话
//未知对话
BattleEnemyEscape();

['Enemy_00099_TurnStart'];
JumpIfHeroInParty(6, "@A201");
SetDlgLower(18, 0, false);
//未知对话
//未知对话
VideoUpdate(0, false);
SetDlgUpper(60, 0, false);
//未知对话
//未知对话
//未知对话
//未知对话
//未知对话
VideoUpdate(0, false);
SetDlgLower(11, 0, false);
//未知对话
//未知对话
//未知对话
VideoUpdate(0, false);
SetDlgUpper(60, 0, false);
//未知对话
//未知对话
//未知对话
VideoUpdate(0, false);
SetDlgLower(7, 0, false);
//未知对话
//未知对话
//未知对话
VideoUpdate(0, false);
SetDlgUpper(60, 0, false);
//未知对话
//未知对话
//未知对话
VideoUpdate(0, false);
SetDlgLower(9, 0, false);
//未知对话
//未知对话
VideoUpdate(0, false);
SetDlgUpper(60, 0, false);
//未知对话
//未知对话
ReplaceAndPause();

['Enemy_00128_TurnStart'];
SetDlgUpper(0, 0, false);
//未知对话
//未知对话
//未知对话
//未知对话
ReplaceAndPause();
ReplaceAndPause();
ReplaceAndPause();
ReplaceAndPause();
SetDlgUpper(0, 0, false);
//未知对话
//未知对话
ReplaceAndPause();
ReplaceAndPause();
ReplaceAndPause();
BattleSetResult(BattleResult.脚本结束);

['Enemy_00128_Action'];
EnemySetMagic(0, 0);
ReplaceAndPause();
SetDlgUpper(0, 0, false);
//未知对话
//未知对话
EnemySetMagic(40, 0);
ReplaceAndPause();
EnemySetMagic(42, 0);
ReplaceAndPause();
EnemySetMagic(87, 0);
ReplaceAndPause();
EnemySetMagic(79, 0);
ReplaceAndPause();
EnemySetMagic(78, 0);
ReplaceAndPause();
//未知对话
//未知对话
EnemySetMagic(45, 0);
ReplaceAndPause();

['Enemy_00038_TurnStart'];
PlaySound(245);
//未知对话
//未知对话
ReplaceAndPause();
ReplaceAndPause();
//未知对话
//未知对话
EnemySetMagic(23, 0);
ReplaceAndPause();
ReplaceAndPause();
//未知对话
//未知对话
//未知对话
EnemySetMagic(24, 0);
ReplaceAndPause();
ReplaceAndPause();
//未知对话
//未知对话
EnemySetMagic(25, 0);
ReplaceAndPause();
BattleSetResult(BattleResult.脚本结束);

BattleStart(45, "@A073", "@A071");
GotoWithNop("@A0A7", 0);
['Enemy_00132_TurnStart'];
SetDlgLower(23, 0, false);
//未知对话
VideoUpdate(0, false);
SetDlgUpper(43, 0, false);
//未知对话
//未知对话
//未知对话
EnemySetMagic(0, 0);
ReplaceAndPause();
EnemySetMagic(38, 0);
ReplaceAndPause();
EnemySetMagic(0, 0);
ReplaceAndPause();
EnemySetMagic(24, 0);
ReplaceAndPause();
ReplaceAndPause();
EnemySetMagic(0, 0);
ReplaceAndPause();
EnemySetMagic(81, 0);
ReplaceAndPause();
EnemySetMagic(38, 0);
ReplaceAndPause();
EnemySetMagic(34, 0);
ReplaceAndPause();
SetDlgLower(10, 0, false);
//未知对话
//未知对话
BattleSetResult(BattleResult.脚本结束);

['Enemy_00122_TurnStart'];
SetDlgLower(5, 0, false);
//未知对话
//未知对话
//未知对话
VideoUpdate(0, false);
SetDlgUpper(0, 0, false);
//未知对话
//未知对话
//未知对话
//未知对话
VideoUpdate(0, false);
SetDlgLower(5, 0, false);
//未知对话
//未知对话
//未知对话
VideoUpdate(0, false);
SetDlgUpper(0, 0, false);
//未知对话
//未知对话
//未知对话
VideoRestore();
//未知对话
//未知对话
//未知对话
VideoUpdate(0, false);
SetDlgLower(5, 0, false);
//未知对话
//未知对话
//未知对话
//未知对话
VideoRestore();
//未知对话
//未知对话
//未知对话
//未知对话
VideoUpdate(0, false);
SetDlgUpper(0, 0, false);
//未知对话
//未知对话
//未知对话
VideoUpdate(0, false);
//未知对话
//未知对话
//未知对话
VideoUpdate(0, false);
SetDlgLower(91, 0, false);
//未知对话
//未知对话
//未知对话
//未知对话
VideoUpdate(0, false);
SetDlgUpper(0, 0, false);
//未知对话
//未知对话
//未知对话
VideoRestore();
//未知对话
//未知对话
//未知对话
//未知对话
//未知对话
ReplaceAndPause();
SetDlgLower(91, 0, false);
//未知对话
//未知对话
//未知对话
//未知对话
//未知对话
VideoRestore();
//未知对话
//未知对话
MusicPlay(Music.逆天而行, true, false);
RoleModifyAttr(Attribute.MaxHP, 170, 2);
RoleModifyAttr(Attribute.MaxMP, 190, 2);
RoleModifyAttr(Attribute.Level, 11, 2);
RoleModifyAttr(Attribute.AttrAttackStrength, 100, 2);
RoleModifyAttr(Attribute.AttrMagicStrength, 155, 2);
RoleModifyAttr(Attribute.AttrDefense, 55, 2);
RoleModifyAttr(Attribute.AttrDexterity, 80, 2);
RoleModifyAttr(Attribute.AttrFleeRate, 30, 2);
RoleRevive(true, 10);
RoleModifyHPMP(true, 9999);
ShowRoleMagicAction(2);
VideoUpdate(0, false);
SetDlgCenter(0, false);
//未知对话
VideoUpdate(0, false);
SetDlgLower(9, 0, false);
//未知对话
//未知对话
VideoUpdate(0, false);
SetDlgLower(21, 0, false);
//未知对话
//未知对话
EnemySetMagic(81, 0);
ReplaceAndPause();
['@A55D'];
EnemySetMagic(0, 0);
ReplaceAndPause();
EnemySetMagic(34, 0);
ReplaceAndPause();
EnemySetMagic(25, 0);
ReplaceAndPause();
ReplaceAndPause();
EnemySetMagic(-1, 0);
ReplaceAndPause();
EnemySetMagic(34, 0);
ReplaceAndPause();
EnemySetMagic(38, 0);
ReplaceAndPause();
EnemySetMagic(24, 0);
ReplaceAndPause();
EnemySetMagic(29, 0);
ReplaceAndPause();
EnemySetMagic(-1, 0);
ReplaceAndPause();
EnemySetMagic(34, 0);
ReplaceAndPause();
EnemySetMagic(24, 0);
ReplaceAndPause();
EnemySetMagic(25, 0);
ReplaceAndPause();
EnemySummonMonster(448, 0, "");
EnemySummonMonster(448, 0, "");
EnemySetMagic(-1, 0);
ReplaceAndPause();
EnemySetMagic(81, 0);
ReplaceAndPause();
EnemySetMagic(0, 0);
ReplaceAndPause();
EnemySetMagic(81, 0);
ReplaceAndPause();
ReplaceAndPause();
EnemySetMagic(34, 0);
ReplaceAndPause();
EnemySetMagic(38, 0);
ReplaceAndPause();
EnemySetMagic(0, 0);
ReplaceAndPause();
EnemySetMagic(24, 0);
ReplaceAndPause();
ReplaceAndPause();
EnemySummonMonster(448, 2, "");
EnemySetMagic(-1, 0);
ReplaceAndPause();
EnemySetMagic(25, 0);
ReplaceAndPauseWithNop("@A55D", 0);

['Enemy_00122_Action'];
SetDlgLower(0, 0, false);
//未知对话
//未知对话
//未知对话
ReplaceAndPause();
SetDlgLower(0, 0, false);
//未知对话
//未知对话
ReplaceAndPause();

['Enemy_00142_TurnStart'];
ReplaceAndPause();
ReplaceAndPause();
EnemySetMagic(-1, 0);
ReplaceAndPause();
GotoWithProbability(80, "@A5A3");
GotoWithProbability(50, "@A5A6");
EnemySetMagic(71, 4);
ReplaceAndPauseWithNop("Enemy_00142_TurnStart", 0);

['Enemy_00127_Won'];
AddItem(154, 0);
SetDlgBox(0);
//未知对话

['Enemy_00097_Won'];
AddItem(156, 0);
SetDlgBox(0);
//未知对话

['Enemy_00122_Won'];
AddItem(170, 0);
SetDlgBox(0);
//未知对话

['Enemy_00072_Action'];
GotoWithProbability(40, "");
ReplaceAndPause();
EnemySetMagic(10, 0);
ReplaceAndPause();
EnemySummonMonster(403, 4, "");
EnemySetMagic(-1, 0);
ReplaceAndPause();
EnemySetMagic(22, 0);
ReplaceAndPause();
ReplaceAndPause();
EnemySetMagic(0, 0);
ReplaceAndPause();
EnemySetMagic(23, 0);
GotoWithProbability(40, "");
EnemySetMagic(0, 0);
ReplaceAndPause();
EnemySetMagic(10, 0);
ReplaceAndPause();
EnemySetMagic(0, 0);
GotoWithProbability(50, "");
ReplaceAndPause();
EnemySummonMonster(403, 4, "");
EnemySetMagic(-1, 0);
ReplaceAndPause();
EnemySetMagic(23, 0);
ReplaceAndPause();
EnemySetMagic(0, 0);
ReplaceAndPauseWithNop("Enemy_00072_Action", 0);

['Enemy_00089_Action'];
GotoWithProbability(30, "");
ReplaceAndPause();
ReplaceAndPause();
ReplaceAndPause();
ReplaceAndPause();
ReplaceAndPause();
ReplaceAndPause();
//未知对话
//未知对话
EnemySetMagic(41, 10);
ReplaceAndPause();
ReplaceAndPause();
ReplaceAndPause();
EnemySetMagic(-1, 0);
ReplaceAndPause();
EnemySetMagic(0, 0);
ReplaceAndPause();
ReplaceAndPauseWithNop("Enemy_00089_Action", 0);

['Enemy_00075_TurnStart'];
EnemySetMagic(-1, 0);
ReplaceAndPause();
EnemySetMagic(58, 0);
ReplaceAndPause();
EnemySetMagic(0, 0);
ReplaceAndPause();
EnemySetMagic(70, 0);
ReplaceAndPause();
EnemySetMagic(12, 0);
ReplaceAndPause();
EnemySetMagic(-1, 0);
ReplaceAndPause();
EnemySetMagic(58, 0);
ReplaceAndPause();
ReplaceAndPause();
EnemySetMagic(-1, 0);
ReplaceAndPause();
EnemySetMagic(70, 0);
ReplaceAndPause();
ReplaceAndPause();
EnemySetMagic(12, 0);
ReplaceAndPause();
EnemySetMagic(0, 0);
ReplaceAndPause();
ReplaceAndPause();
EnemySetMagic(70, 0);
ReplaceAndPause();
EnemySetMagic(58, 0);
ReplaceAndPause();
EnemySetMagic(-1, 0);
ReplaceAndPause();
ReplaceAndPauseWithNop("Enemy_00075_TurnStart", 0);

['Enemy_00076_Action'];
EnemySetMagic(0, 0);
ReplaceAndPause();
ReplaceAndPause();
EnemySummonMonster(419, 2, "");
EnemySetMagic(-1, 0);
ReplaceAndPause();
PlaySound(267);
EnemySetMagic(59, 0);
ReplaceAndPause();
EnemySetMagic(31, 0);
ReplaceAndPause();
EnemySetMagic(37, 0);
ReplaceAndPause();
EnemySetMagic(11, 0);
ReplaceAndPause();
EnemySummonMonster(433, 2, "@A61E");
EnemySetMagic(-1, 0);
['@A61E'];
ReplaceAndPause();
PlaySound(267);
EnemySetMagic(59, 0);
ReplaceAndPause();
ReplaceAndPause();
EnemySetMagic(0, 0);
ReplaceAndPause();
EnemySetMagic(11, 0);
ReplaceAndPause();
EnemySetMagic(0, 0);
ReplaceAndPause();
PlaySound(267);
EnemySetMagic(59, 0);
ReplaceAndPause();
PlaySound(267);
EnemySetMagic(59, 0);
ReplaceAndPause();
EnemySetMagic(0, 0);
ReplaceAndPause();
EnemySummonMonster(452, 2, "@A634");
EnemySetMagic(-1, 0);
ReplaceAndPause();
['@A634'];
EnemySetMagic(23, 0);
ReplaceAndPause();
EnemySetMagic(32, 0);
ReplaceAndPause();
EnemySetMagic(0, 0);
ReplaceAndPause();
EnemySummonMonster(433, 2, "@A63D");
EnemySetMagic(-1, 0);
ReplaceAndPause();
['@A63D'];
PlaySound(267);
EnemySetMagic(59, 0);
ReplaceAndPause();
EnemySetMagic(23, 0);
ReplaceAndPauseWithNop("Enemy_00076_Action", 0);

['Enemy_00097_TurnStart'];
EnemySetMagic(51, 0);
ReplaceAndPause();
ReplaceAndPause();
EnemySetMagic(62, 0);
ReplaceAndPause();
EnemySetMagic(-1, 0);
ReplaceAndPause();
EnemySetMagic(51, 0);
ReplaceAndPause();
EnemySetMagic(40, 0);
ReplaceAndPause();
EnemySetMagic(62, 0);
ReplaceAndPause();
EnemySetMagic(51, 0);
ReplaceAndPause();
EnemySetMagic(40, 0);
ReplaceAndPause();
EnemySetMagic(62, 0);
ReplaceAndPause();
EnemySetMagic(87, 0);
ReplaceAndPause();
EnemySetMagic(51, 0);
ReplaceAndPause();
EnemySetMagic(62, 0);
ReplaceAndPause();
ReplaceAndPauseWithNop("Enemy_00097_TurnStart", 0);

['Enemy_00133_TurnStart'];
EnemySetMagic(19, 0);
ReplaceAndPause();
EnemySetMagic(0, 0);
ReplaceAndPause();

['Enemy_00137_TurnStart'];
ReplaceAndPause();
EnemyClone(0, "");
ReplaceAndPauseWithNop("Enemy_00137_TurnStart", 0);

['Enemy_00005_Action'];
ReplaceAndPause();
GotoWithProbability(60, "");
EnemyTransform(73);
EnemySetMagic(-1, 0);
ReplaceAndPause();
EnemySetMagic(60, 0);
ReplaceAndPause();
EnemySetMagic(0, 0);
ReplaceAndPause();
EnemySetMagic(60, 7);
ReplaceAndPause();

['Enemy_00032_Action'];
ReplaceAndPause();
ReplaceAndPause();
GotoWithProbability(35, "");
EnemyTransform(64);
EnemySetMagic(-1, 0);
ReplaceAndPause();
EnemySetMagic(23, 5);
ReplaceAndPause();

['Enemy_00013_Action'];
ReplaceAndPause();
GotoWithProbability(60, "");
EnemyTransform(37);
EnemySetMagic(-1, 0);
ReplaceAndPause();
EnemySetMagic(0, 0);
ReplaceAndPause();
GotoWithProbability(60, "");
EnemyTransform(13);
EnemySetMagic(-1, 0);
ReplaceAndPause();
EnemySetMagic(30, 7);
ReplaceAndPauseWithNop("Enemy_00013_Action", 0);

['Enemy_00025_Action'];
GotoWithProbability(42637, "");
EnemySetMagic(12, 0);
ReplaceAndPause();
['@A68D'];
EnemySetMagic(-1, 0);
ReplaceAndPause();
EnemySetMagic(12, 0);
ReplaceAndPauseWithNop("@A68D", 0);

['Enemy_00103_Action'];
EnemySetMagic(-1, 0);
ReplaceAndPause();
EnemySetMagic(75, 0);
ReplaceAndPause();
EnemySetMagic(75, 0);
ReplaceAndPause();
EnemySetMagic(12, 0);
ReplaceAndPause();
ReplaceAndPause();
EnemySetMagic(-1, 0);
ReplaceAndPause();
EnemySetMagic(53, 0);
ReplaceAndPause();
EnemySetMagic(75, 0);
ReplaceAndPause();
EnemySetMagic(0, 0);
ReplaceAndPause();
EnemySetMagic(12, 0);
ReplaceAndPause();
ReplaceAndPause();
EnemySetMagic(-1, 0);
ReplaceAndPause();
EnemySetMagic(0, 0);
ReplaceAndPause();
EnemySetMagic(70, 0);
ReplaceAndPause();
EnemySetMagic(70, 0);
ReplaceAndPause();
ReplaceAndPause();
EnemySetMagic(12, 0);
ReplaceAndPause();
EnemySetMagic(0, 0);
ReplaceAndPause();
ReplaceAndPauseWithNop("Enemy_00103_Action", 0);

['Enemy_00024_Action'];
GotoWithProbability(60, "@A6C3");
GotoWithProbability(60, "");
EnemySummonMonster(441, 2, "");
EnemySetMagic(-1, 0);
ReplaceAndPause();
EnemySetMagic(0, 0);
ReplaceAndPause();
EnemySummonMonster(441, 2, "");
EnemySetMagic(-1, 0);
ReplaceAndPause();
EnemySetMagic(0, 0);
ReplaceAndPause();
ReplaceAndPause();
ReplaceAndPauseWithNop("Enemy_00024_Action", 0);
['@A6C3'];
GotoWithProbability(50, "");
EnemySummonMonster(0, 0, "");
EnemySetMagic(-1, 0);
ReplaceAndPause();
EnemySetMagic(0, 0);
ReplaceAndPause();
ReplaceAndPause();
ReplaceAndPauseWithNop("Enemy_00024_Action", 0);

['Enemy_00048_TurnStart'];
ReplaceAndPause();
GotoWithProbability(50, "");
EnemyClone(0, "");
ReplaceAndPauseWithNop("Enemy_00048_TurnStart", 0);

['Enemy_00077_TurnStart'];
SetDlgLower(27, 0, false);
//未知对话
//未知对话
//未知对话
//未知对话
VideoUpdate(0, false);
//未知对话
//未知对话
//未知对话
ReplaceAndPause();

['Enemy_00077_Action'];
EnemySetMagic(51, 0);
ReplaceAndPause();
ReplaceAndPause();
EnemySummonMonster(512, 0, "");
EnemySetMagic(-1, 0);
ReplaceAndPause();
EnemySummonMonster(512, 0, "");
EnemySetMagic(-1, 0);
ReplaceAndPause();
ReplaceAndPause();
//未知对话
//未知对话
//未知对话
//未知对话
EnemySetMagic(74, 0);
ReplaceAndPause();
EnemySetMagic(-1, 0);
ReplaceAndPause();
EnemySetMagic(74, 0);
ReplaceAndPause();
EnemySetMagic(23, 0);
ReplaceAndPause();
EnemySetMagic(10, 0);
ReplaceAndPause();
EnemySummonMonster(512, 0, "");
EnemySetMagic(-1, 0);
ReplaceAndPause();
EnemySummonMonster(512, 0, "");
EnemySetMagic(-1, 0);
ReplaceAndPause();
EnemySetMagic(24, 0);
ReplaceAndPause();
EnemySetMagic(29, 0);
ReplaceAndPause();
EnemySetMagic(-1, 0);
ReplaceAndPause();
EnemySetMagic(0, 0);
ReplaceAndPause();
EnemySetMagic(74, 0);
ReplaceAndPause();
EnemySetMagic(74, 0);
ReplaceAndPause();
EnemySetMagic(74, 0);
ReplaceAndPause();
EnemySetMagic(-1, 0);
ReplaceAndPause();
EnemySetMagic(51, 0);
ReplaceAndPause();
ReplaceAndPause();
EnemySetMagic(29, 0);
ReplaceAndPause();
EnemySetMagic(0, 0);
ReplaceAndPause();
EnemySummonMonster(512, 0, "");
EnemySetMagic(-1, 0);
ReplaceAndPause();
EnemySetMagic(74, 0);
ReplaceAndPause();
EnemySummonMonster(512, 0, "");
EnemySetMagic(-1, 0);
ReplaceAndPause();
EnemySetMagic(74, 0);
ReplaceAndPause();
ReplaceAndPause();
EnemySetMagic(-1, 0);
ReplaceAndPause();
EnemySetMagic(0, 0);
ReplaceAndPause();
EnemySetMagic(10, 0);
ReplaceAndPause();
EnemySetMagic(24, 0);
ReplaceAndPause();
EnemySetMagic(-1, 0);
ReplaceAndPause();
EnemySetMagic(20, 0);
ReplaceAndPause();
EnemySetMagic(74, 5);
ReplaceAndPause();

['Enemy_00127_Action'];
EnemySummonMonster(442, 2, "");
EnemySetMagic(-1, 0);
ReplaceAndPause();
EnemySetMagic(82, 0);
ReplaceAndPause();
EnemySetMagic(-1, 0);
ReplaceAndPause();
EnemySetMagic(82, 0);
ReplaceAndPause();
ReplaceAndPause();
EnemySetMagic(-1, 0);
ReplaceAndPause();
EnemySetMagic(82, 0);
ReplaceAndPause();
ReplaceAndPause();
EnemySummonMonster(453, 0, "");
EnemySummonMonster(453, 0, "");
EnemySetMagic(-1, 0);
ReplaceAndPause();
EnemySetMagic(82, 0);
ReplaceAndPause();
ReplaceAndPause();
ReplaceAndPause();
EnemySetMagic(-1, 0);
ReplaceAndPause();
EnemySetMagic(82, 0);
ReplaceAndPause();
EnemySetMagic(-1, 0);
ReplaceAndPause();
EnemySetMagic(82, 0);
ReplaceAndPause();
ReplaceAndPauseWithNop("Enemy_00127_Action", 0);

['Enemy_00068_Won'];
AddItem(92, 0);
SetDlgBox(0);
//未知对话

['Enemy_00116_TurnStart'];
JumpIfEnemyNotFirstOfKind("");
PlaySound(206);
ReplaceAndPause();

['Enemy_00039_TurnStart'];
JumpIfEnemyNotFirstOfKind("");
PlaySound(245);
ReplaceAndPause();

['Enemy_00023_TurnStart'];
JumpIfEnemyNotFirstOfKind("");
PlaySound(258);
GotoWithProbability(45, "");
ReplaceAndPauseWithNop("Enemy_00023_TurnStart", 0);

['Enemy_00104_TurnStart'];
SetDlgLower(1, 0, false);
//未知对话
//未知对话
//未知对话
VideoUpdate(0, false);
SetDlgUpper(44, 0, false);
//未知对话
//未知对话
VideoUpdate(0, false);
SetDlgLower(1, 0, false);
//未知对话
//未知对话
VideoUpdate(0, false);
SetDlgUpper(44, 0, false);
//未知对话
//未知对话
ReplaceAndPause();

['Enemy_00125_Action'];
EnemySetMagic(10, 0);
ReplaceAndPause();
EnemySetMagic(12, 0);
ReplaceAndPause();
GotoWithProbability(30, "");
EnemySummonMonster(490, 0, "");
EnemySummonMonster(490, 0, "");
EnemySetMagic(-1, 0);
ReplaceAndPause();
EnemySetMagic(11, 5);
ReplaceAndPause();

['Enemy_00126_Action'];
EnemySetMagic(78, 0);
ReplaceAndPause();
EnemySetMagic(24, 0);
ReplaceAndPause();
GotoWithProbability(40, "");
EnemySummonMonster(492, 0, "");
EnemySummonMonster(492, 0, "");
EnemySetMagic(-1, 0);
ReplaceAndPause();
EnemySetMagic(25, 5);
ReplaceAndPause();

['Enemy_00050_TurnStart'];
PlaySound(267);
ReplaceAndPause();

['Enemy_00023_Action'];
ReplaceAndPause();
GotoWithProbability(66, "");
EnemySummonMonster(0, 0, "");
EnemySetMagic(-1, 0);
ReplaceAndPause();
EnemySetMagic(0, 0);

['Enemy_00121_Action'];
ReplaceAndPause();
EnemySetMagic(30, 0);
ReplaceAndPause();
EnemySetMagic(31, 0);
ReplaceAndPause();
EnemySetMagic(32, 0);
ReplaceAndPause();

['Enemy_00141_Action'];
ReplaceAndPause();
EnemySetMagic(26, 0);
ReplaceAndPause();
ReplaceAndPause();
EnemySetMagic(27, 0);
ReplaceAndPause();

['Enemy_00150_Action'];
JumpToRandomInstruction(4);
GotoWithNop("@A7A5", 0);
GotoWithNop("@A7A9", 0);
GotoWithNop("@A7AD", 0);
GotoWithNop("@A7AF", 0);
['@A7A5'];
EnemySetMagic(-1, 0);
ReplaceAndPause();
EnemySetMagic(0, 0);
ReplaceAndPauseWithNop("Enemy_00150_Action", 0);
['@A7A9'];
EnemySetMagic(72, 0);
ReplaceAndPause();
EnemySetMagic(11, 0);
ReplaceAndPauseWithNop("Enemy_00150_Action", 0);
['@A7AD'];
EnemySetMagic(29, 0);
ReplaceAndPauseWithNop("Enemy_00150_Action", 0);
['@A7AF'];
EnemySetMagic(38, 0);
ReplaceAndPauseWithNop("Enemy_00150_Action", 0);

['Enemy_00066_Action'];
GotoWithProbability(60, "@A7B7");
GotoWithProbability(40, "@A7B9");
GotoWithProbability(20, "@A7BB");
EnemySetMagic(-1, 0);
ReplaceAndPauseWithNop("Enemy_00066_Action", 0);
['@A7B7'];
EnemySetMagic(32, 0);
ReplaceAndPauseWithNop("Enemy_00066_Action", 0);
['@A7B9'];
EnemySetMagic(80, 0);
ReplaceAndPauseWithNop("Enemy_00066_Action", 0);
['@A7BB'];
EnemySetMagic(77, 0);
ReplaceAndPauseWithNop("Enemy_00066_Action", 0);

['Enemy_00149_TurnStart'];
//未知对话
//未知对话
//未知对话
ReplaceAndPause();

['Enemy_00149_Action'];
EnemySetMagic(94, 0);
ReplaceAndPause();
EnemySetMagic(95, 0);
ReplaceAndPause();
EnemySetMagic(0, 0);
ReplaceAndPause();
['@A7C9'];
JumpToRandomInstruction(14);
GotoWithNop("@A7D8", 0);
GotoWithNop("@A7DE", 0);
GotoWithNop("@A7E2", 0);
GotoWithNop("@A7E4", 0);
GotoWithNop("@A7E6", 0);
GotoWithNop("@A7E8", 0);
GotoWithNop("@A7EC", 0);
GotoWithNop("@A7EE", 0);
GotoWithNop("@A7F2", 0);
GotoWithNop("@A7F6", 0);
GotoWithNop("@A7FA", 0);
GotoWithNop("@A7FE", 0);
GotoWithNop("@A801", 0);
GotoWithNop("@A804", 0);
['@A7D8'];
EnemySetMagic(95, 0);
ReplaceAndPause();
EnemySetMagic(0, 0);
ReplaceAndPause();
EnemySetMagic(94, 0);
ReplaceAndPauseWithNop("@A7C9", 0);
['@A7DE'];
EnemySetMagic(73, 0);
ReplaceAndPause();
EnemySetMagic(34, 0);
ReplaceAndPauseWithNop("@A7C9", 0);
['@A7E2'];
EnemySetMagic(60, 0);
ReplaceAndPauseWithNop("@A7C9", 0);
['@A7E4'];
EnemySetMagic(29, 0);
ReplaceAndPauseWithNop("@A7C9", 0);
['@A7E6'];
EnemySetMagic(38, 0);
ReplaceAndPauseWithNop("@A7C9", 0);
['@A7E8'];
EnemySetMagic(24, 0);
ReplaceAndPause();
EnemySetMagic(25, 0);
ReplaceAndPauseWithNop("@A7C9", 0);
['@A7EC'];
EnemySetMagic(72, 0);
ReplaceAndPauseWithNop("@A7C9", 0);
['@A7EE'];
EnemySetMagic(93, 0);
ReplaceAndPause();
EnemySetMagic(55, 0);
ReplaceAndPauseWithNop("@A7C9", 0);
['@A7F2'];
EnemySetMagic(12, 0);
ReplaceAndPause();
EnemySetMagic(12, 0);
ReplaceAndPauseWithNop("@A7C9", 0);
['@A7F6'];
EnemySetMagic(58, 0);
ReplaceAndPause();
EnemySetMagic(95, 0);
ReplaceAndPauseWithNop("@A7C9", 0);
['@A7FA'];
EnemySetMagic(78, 0);
ReplaceAndPause();
EnemySetMagic(79, 0);
ReplaceAndPauseWithNop("@A7C9", 0);
['@A7FE'];
EnemySummonMonster(503, 2, "@A7D8");
EnemySetMagic(-1, 0);
ReplaceAndPauseWithNop("@A7C9", 0);
['@A801'];
EnemySummonMonster(493, 2, "@A7EC");
EnemySetMagic(-1, 0);
ReplaceAndPauseWithNop("@A7C9", 0);
['@A804'];
EnemySummonMonster(511, 2, "@A7F6");
EnemySetMagic(-1, 0);
ReplaceAndPauseWithNop("@A7C9", 0);

