['Event_00123_00001_Trigger'];
SceneEnter(109);
PartySetPos(27, 69, 0);
FadeOut(0);

['Event_00123_00002_Trigger'];
SceneEnter(123);
PartySetPos(45, 33, 0);
FadeOut(0);

['Event_00123_00003_Trigger'];
SceneEnter(123);
PartySetPos(24, 33, 0);
FadeOut(0);

['Event_00123_00004_Trigger'];
PartySetPos(20, 34, 0);
Call("@8E0D");
SceneEnter(124);

['Scene_00123_Enter'];
RoleSetDirFrame(1, 0, 1);
VideoUpdate(0, false);
SetDlgLower(7, 0, false);
//未知对话
//未知对话
//未知对话
//未知对话
RoleSetDirFrame(3, 0, 0);
VideoUpdate(0, false);
SetDlgUpper(22, 0, false);
//未知对话
//未知对话
SetDlgLower(1, 0, false);
//未知对话
//未知对话
//未知对话
VideoUpdate(0, false);
SetDlgUpper(22, 0, false);
//未知对话
//未知对话
//未知对话
//未知对话
//未知对话
VideoUpdate(0, false);
SetDlgLower(9, 0, false);
//未知对话
//未知对话
//未知对话
//未知对话
SetDlgUpper(25, 0, false);
//未知对话
//未知对话
//未知对话
//未知对话
RoleSetDirFrame(1, 0, 0);
ReplaceAndPause();

