['Event_00012_00002_Trigger'];
MusicPlay(Music.停止播放, true, false);
VideoUpdate(0, false);
EventSetTriggerMode(-1, -1, false, 1);
SetDlgUpper(37, 0, false);
//醉道士：
//哈哈哈！小伙子你果然守信
VideoUpdate(0, false);
SetDlgLower(6, 0, false);
//李逍遥：
//要不是婶婶看得紧，晚辈原本
//还想替老前辈带几壶好酒来
SetDlgUpper(37, 0, false);
//醉道士：
//呵呵！那倒不必了
//老夫喝遍天下名酒，要不是酒
//虫闹得凶，才不稀罕那掺了水
//的酸酒。
VideoUpdate(0, false);
SetDlgLower(1, 0, false);
//李逍遥：
//让前辈见笑了，乡下小店没啥
//美酒佳肴，怠慢不周之处还请
//前辈多多见谅
VideoUpdate(0, false);
SetDlgUpper(37, 0, false);
//醉道士：
//哈～哈哈！这样说才像句人话
//我一生从不亏欠别人，现在就
//教你一式剑招，算是回报你赐
//酒之恩，仔细看清楚了
FadeOut(0);
SetRng(1);
MusicPlay(Music.酒剑仙, true, false);
PlayRng(0, 112, 16);
PlaySound(86);
PlayRng(113, 162, 16);
PlaySound(87);
PlayRng(163, 186, 16);
PlaySound(85);
PlayRng(187, 195, 16);
PlaySound(85);
PlayRng(196, 266, 16);
PlaySound(88);
PlayRng(267, 0, 16);
FadeOut(0);
PartySetPos(21, 25, 0);
HeroSetSprite(0, 193, true);
RoleSetDirFrame(0, 9, 0);
SetPaletteTime(0);
EventSetState(5, 0, 0);
EventSetState(4, 0, 0);
EventSetState(7, 0, 0);
EventSetState(8, 0, 0);
EventSetTriggerScript(4, 21, "Event_00005_00021_Trigger");
EventSetTriggerScript(4, 20, "Event_00005_00020_Trigger");
VideoUpdate(0, false);
SetDlgLower(1, 0, false);
//李逍遥：
//前辈！请您收我为徒。
SetDlgUpper(37, 0, false);
//醉道士：
//贫道一向漂泊惯了
//不想收徒弟
VideoUpdate(0, false);
RoleSetDirFrame(0, 8, 0);
VideoUpdate(0, false);
SetDlgLower(10, 0, false);
//李逍遥：
//前辈～求求您．．晚辈愿意孝
//敬您下半辈子，跟随您行侠仗
//义，云游四海．．
SetDlgUpper(37, 0, false);
//醉道士：
//你学此一招剑法，便可一生受
//用无穷，你我缘尽于此，回家
//去吧．．
EventSetState(-1, -1, 0);
FadeToScene(2, -1);
RoleSetDirFrame(0, 9, 0);
WaitEventAutoScriptRun(5, false, false);
HeroSetSprite(0, 2, true);
RoleSetDirFrame(2, 0, 0);
WaitEventAutoScriptRun(4, false, false);
RoleSetDirFrame(3, 0, 0);
WaitEventAutoScriptRun(2, false, false);
RoleSetDirFrame(1, 0, 0);
WaitEventAutoScriptRun(2, false, false);
RoleSetDirFrame(0, 0, 0);
VideoUpdate(0, false);
SetDlgLower(0, 0, false);
//李逍遥：
//前．．前辈！
//还不知道您尊姓大名呢
VideoUpdate(0, false);
SetDlgCenter(0, false);
//"远远传来宏亮的朗诗声"
VideoUpdate(0, false);
SetDlgUpper(0, 0, false);
//"御剑乘风来　除魔天地间"
//"有酒乐逍遥　无酒我亦癫"
//"一饮尽江河　再饮吞日月"
//"千杯醉不倒　唯我酒剑仙"
SetDlgLower(0, 0, false);
//酒．．剑仙？
HeroAddMagic(48, 1);
RoleModifyHPMP(true, 9999);
SceneSetScript(8, "@0938", "");
EventSetState(7, 3, 2);
EventSetState(7, 4, 2);
EventSetState(3, 5, 0);
EventSetState(4, 26, 0);
EventSetState(4, 27, 0);
EventSetState(4, 28, 0);
EventSetState(4, 29, 0);
EventSetState(4, 2, 2);
EventSetState(4, 3, 2);
EventSetState(4, 4, 2);
EventSetState(4, 5, 2);
EventSetState(4, 6, 2);
EventSetState(4, 12, 2);
EventSetState(4, 13, 1);
EventSetState(4, 10, 2);
EventSetTriggerScript(4, 10, "@0989");
EventSetState(4, 11, 2);
EventSetTriggerScript(4, 11, "@098F");
EventSetState(4, 14, 2);
EventSetState(4, 15, 2);
EventSetState(4, 16, 2);
EventSetState(4, 17, 1);
EventSetState(4, 18, 1);
EventSetTriggerScript(8, 7, "@0D37");
EventSetTriggerScript(8, 2, "");
EventSetTriggerScript(8, 3, "@0993");
EventSetTriggerScript(8, 4, "@099D");
EventSetAutoScript(8, 4, "Event_00006_00014_Auto");
EventSetState(4, 1, 2);
EventSetPos(4, 1, 1152, 1248);
EventSetAutoScript(4, 1, "");
EventSetTriggerScript(4, 1, "@09AC");
EventSetState(3, 13, 2);
EventSetTriggerMode(3, 13, true, 2);
EventSetAutoScript(3, 13, "");
EventSetPos(3, 13, 1088, 1648);
EventSetTriggerScript(3, 13, "@0941");
EventSetState(3, 17, 2);
EventSetState(3, 18, 2);
EventSetPos(3, 17, 1552, 1496);
EventSetPos(3, 18, 1552, 1512);
EventSetTriggerScript(3, 17, "@09A6");
EventSetTriggerScript(3, 18, "@09A6");
EventSetTriggerMode(3, 17, true, 2);
EventSetAutoScript(3, 17, "Event_00002_00026_Auto");
EventSetAutoScript(3, 18, "Event_00023_00016_Auto");
EventSetState(1, 28, 2);

