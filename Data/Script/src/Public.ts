['@005E'];
EventWalkOneStep(1, 9, 4, 2);
VideoUpdate(0, false);
EventWalkOneStep(1, 9, 4, 2);
VideoUpdate(0, false);
EventWalkOneStep(1, 9, 4, 2);
VideoUpdate(0, false);
EventWalkOneStep(1, 9, 4, 2);
VideoUpdate(0, false);
EventSetTriggerMode(-1, -1, true, 0);
ReplaceAndPause();
EventSetTriggerMode(-1, -1, false, 1);
EventSetPos(1, 9, 1376, 288);
FadeOut(0);
PartySetPos(20, 36, 1);
HeroSetSprite(0, 193, true);
RoleSetDirFrame(0, 1, 0);
PlaySound(45);
VideoUpdate(0, false);
RoleMoveOneStep(0, 5, 0);
RoleSetDirFrame(0, 1, 0);
VideoUpdate(0, false);
RoleMoveOneStep(0, 7, 0);
RoleSetDirFrame(0, 1, 0);
VideoUpdate(0, false);
RoleMoveOneStep(0, 9, 0);
RoleSetDirFrame(0, 1, 0);
VideoUpdate(0, false);
RoleMoveOneStep(0, 11, 0);
RoleSetDirFrame(0, 1, 0);
VideoUpdate(0, false);
RoleSetDirFrame(0, 2, 0);
VideoUpdate(0, false);
PlaySound(93);
WaitEventAutoScriptRun(5, false, false);
HeroSetSprite(0, 2, true);
RoleSetDirFrame(0, 0, 0);
VideoUpdate(0, false);
ReplaceAndPauseWithNop("@005E", 0);

['@00B9'];
SetDlgCenter(0, false);
//"双手端着物品无法爬下去"

['@00BC'];
SetDlgCenter(0, false);
//"双手端着物品无法爬上去"

['@00BF'];
EventWalkOneStep(1, 9, 4, 2);
VideoUpdate(0, false);
GotoWithNop("@00BF", 4);
SetDlgLower(11, 0, false);
//赵灵儿：
//哦．．这通道是．．？
VideoUpdate(0, false);
SetDlgLower(9, 0, false);
//李逍遥：
//哈～那些苗人怎么也不会料到
//我在这里做了一个密道，结果
//就刚好救了你呢．．
['@00CB'];
EventWalkOneStep(1, 9, -4, -2);
VideoUpdate(0, false);
GotoWithNop("@00CB", 4);

['@00CF'];
SetDlgLower(6, 0, false);
//李逍遥：
//灵儿．．你要不要爬爬看？
SetDlgUpper(17, 0, false);
//赵灵儿：
//你好坏～叫女孩子爬这种东西
//很难看呢！人家才不要．．

['@0163'];
EventSetTriggerMode(-1, -1, false, 1);
VideoUpdate(0, false);
SetDlgUpper(55, 0, false);
//李大娘：
//逍遥你来的正好，快把门口
//那个臭要饭的赶走，免得妨
//碍咱们做生意
EventSetAutoScript(3, 13, "@0182");
EventSetTriggerScript(3, 19, "@025C");
WaitEventAutoScriptRun(6, false, false);
RoleSetDirFrame(1, 0, 0);
WaitEventAutoScriptRun(4, false, false);
RoleSetDirFrame(0, 0, 0);
WaitEventAutoScriptRun(2, false, false);
ReplaceAndPause();
//记得喔！
//等一下到厨房来帮忙端菜

['@0175'];
EventSetTriggerMode(-1, -1, false, -1);
NpcMoveToBlock(38, 83, 0, 3);
NpcMoveToBlock(36, 85, 0, 3);
NpcMoveToBlock(36, 85, 1, 3);
['@0179'];
EventWalkOneStep(-1, -1, 5, 5);
EventWalkOneStep(-1, -1, 3, 3);
ReplaceAndPauseWithNop("@0179", 12);
EventSetTriggerMode(-1, -1, false, 1);
NpcMoveToBlock(42, 94, 1, 3);
NpcMoveToBlock(35, 101, 1, 3);
EventSetTriggerMode(-1, -1, true, 2);
EventSetTriggerScript(-1, -1, "@0163");

['@0182'];
NpcMoveToBlock(31, 97, 1, 3);
NpcMoveToBlock(34, 95, 0, 3);
NpcMoveToBlock(31, 92, 1, 3);
EventSetState(1, 20, 2);
EventSetState(-1, -1, 0);

['@0196'];
NpcMoveToBlockMutexLock(39, 85, 0, 2);
NpcMoveToBlockMutexLock(41, 83, 0, 2);
EventSetState(1, 25, 2);
EventSetState(-1, -1, 0);

['@019B'];
WaitEventAutoScriptRun(2, false, false);
NpcMoveToBlockMutexLock(37, 82, 0, 2);
NpcMoveToBlockMutexLock(44, 89, 1, 2);
NpcSetDirFrame(2, 0);
Call("Event_00004_00030_Trigger");
NpcMoveToBlockMutexLock(45, 88, 1, 2);
EventSetState(1, 26, 2);
EventSetState(-1, -1, 0);

['@01A4'];
WaitEventAutoScriptRun(4, false, false);
NpcMoveToBlockMutexLock(37, 82, 1, 2);
NpcMoveToBlockMutexLock(44, 89, 0, 2);
WaitEventAutoScriptRun(2, false, false);
NpcSetDirFrame(2, 0);
WaitEventAutoScriptRun(4, false, false);
NpcMoveToBlockMutexLock(45, 88, 0, 2);
EventSetState(1, 27, 2);
EventSetState(-1, -1, 0);

['@01B9'];
SetDlgUpper(59, 0, false);
//苗人头领：
//送酒菜来啊？我还不饿，你先
//拿到隔璧给我的手下们吃
ReplaceAndPause();
SetDlgUpper(0, 0, false);
//苗人头领：
//本大爷说不饿
//没听到是不是？端走！
ReplaceAndPause();
['@01C3'];
SetDlgUpper(0, 0, false);
//苗人头领：
//你去忙吧．．
//有事我再叫你

['@01C8'];
//苗人喽啰：
//嗯．．这烧鸡味道不错
ReplaceAndPause();
//小菜也很可口．．
ReplaceAndPause();
//好饱！好饱！

['@01CF'];
//苗人喽啰：
//从苗疆一路赶到这儿来
//总算可以好好吃个一顿
ReplaceAndPause();
//吃饱喝足了，明天好干大事！

['@021D'];
EventAnimate(0);
ReplaceAndPauseWithNop("@021D", 8);

['@0220'];
//苗人喽啰：
//汉人的草药也不是什么病都能
//医的。还是咱们苗人的巫术比
//较厉害，咱们苗疆有个拜月教
//听说他们有使死人复活的法术

['@0226'];
//苗人喽啰：
//听说老板娘病了是吗？
ReplaceAndPause();
//这下可不妙了．．方圆十里内
//也只有这间客栈，咱们的晚上
//去哪儿吃喝？

['@0230'];
//李大娘：
//逍遥！快把桌上的酒菜
//端上楼去！
EventSetTriggerScript(1, 21, "@0247");

['@0235'];
//李大娘：
//别愣在这里，帮帮忙吧
//我都快忙不过来了！

['@0247'];
EventSetDirFrame(1, 20, 0, 0);
VideoUpdate(0, false);
SetDlgUpper(0, 0, false);
//李大娘：
//对了！就是那盘
//赶快端去给楼上的客官
HeroSetSprite(0, 208, true);
EventSetState(1, 21, 0);
EventSetTriggerScript(1, 20, "@0235");
EventSetTriggerScript(1, 25, "@01B9");
EventSetTriggerScript(3, 19, "@027E");
EventSetState(1, 16, 1);
EventSetTriggerScript(1, 10, "@00B9");
EventSetTriggerScript(1, 8, "@00BC");

['@025C'];
SetDlgLower(1, 0, false);
//李逍遥：
//去去去！
//我们也很穷，没钱分给你
VideoUpdate(0, false);
SetDlgUpper(37, 0, false);
//醉道士：
//我不是要钱，我只想讨些酒喝
//小兄弟～拜托一下嘛．．
//给我一点酒吧
SetDlgLower(7, 0, false);
//李逍遥：
//不成！不成！给婶婶知道了
//我准挨骂，你赶快走吧！
VideoUpdate(0, false);
EventSetTriggerScript(1, 20, "@0230");
EventSetState(1, 21, 1);
SetDlgUpper(37, 0, false);
//醉道士：
//哎呀！没酒喝我一步也走不动
//你就行行好吧．．
ReplaceAndPause();
SetDlgUpper(37, 0, false);
//醉道士：
//拜托嘛～小兄弟．．
//我只要喝一小口酒就行了
ReplaceAndPause();
SetDlgUpper(37, 0, false);
//醉道士：
//酒．．求求你．．一口就好
SetDlgLower(8, 0, false);
//李逍遥：
//没见过这么赖皮的酒鬼

['@027E'];
SetDlgUpper(37, 0, false);
//醉道士：
//酒．．求求你．．给我酒．．
SetDlgLower(1, 0, false);
//李逍遥：
//不行不行～这是给客人喝的

['@0285'];
SetDlgUpper(37, 0, false);
//醉道士：
//酒．．求求．．你．．
//一口．．喝一口．．就好

['@028A'];
VideoUpdate(0, false);
SetDlgUpper(37, 0, false);
//醉道士：
//酒··求求．．你．．
//一口．．喝一口．．就好
SetDlgLower(1, 0, false);
//李逍遥：
//看你可怜，就给你喝一口吧
//喂～只能喝一口喔！
VideoUpdate(0, false);
NpcSetFrame(2);
FadeToScene(0, -1);
EventSetAutoScript(-1, -1, "");
SetDlgUpper(37, 0, false);
//醉道士：
//啊．．．．好酒！
VideoUpdate(0, false);
SetDlgLower(10, 0, false);
//李逍遥：
//哎呀．．你怎么喝光了！
VideoUpdate(0, false);
SetDlgUpper(37, 0, false);
//醉道士：
//嗝～我一口就是那么大口
//真是不好意思．．
SetDlgLower(5, 0, false);
//李逍遥：
//你．．．你要赔我！
VideoUpdate(0, false);
SetDlgUpper(37, 0, false);
//醉道士：
//呵呵．．要钱我可没有
//你不是很想学剑吗？
SetDlgLower(10, 0, false);
//李逍遥：
//你怎么知道？
VideoUpdate(0, false);
SetDlgUpper(37, 0, false);
//醉道士：
//看在酒的份上
//贫道可以破例指点你几招
VideoUpdate(0, false);
SetDlgLower(2, 0, false);
//李逍遥：
//．．你．．你要教我剑法？？
RoleSetDirFrame(1, 0, 0);
WaitEventAutoScriptRun(8, false, false);
RoleSetDirFrame(0, 0, 0);
VideoUpdate(0, false);
SetDlgLower(9, 0, false);
//李逍遥：
//老伯．．您别逗我了
//您还是快走吧，要是给我婶婶
//知道我拿酒给你喝，准骂人的
WaitEventAutoScriptRun(0, false, false);
RoleSetDirFrame(1, 0, 0);
WaitEventAutoScriptRun(4, false, false);
SetDlgUpper(37, 0, false);
//醉道士：
//哈哈哈！那就明晚三更
//十里坡"山神庙"。不见不散！
EventSetState(-1, -1, 0);
FadeToScene(0, -1);
SetDlgCenter(0, false);
//"醉道士话说完一溜烟地
//就不见了．．"
RoleSetDirFrame(0, 0, 0);
VideoUpdate(0, false);
SetDlgLower(2, 0, false);
//咦～人呢？
RemoveItem(212, 0, "");
EventSetState(1, 17, 0);
EventSetTriggerScript(1, 20, "@02E5");
VideoUpdate(0, false);
SetDlgUpper(55, 0, false);
//李大娘：
//逍遥～你过来一下！
RoleSetDirFrame(1, 0, 0);
VideoUpdate(0, false);
SetDlgLower(0, 0, false);
//李逍遥：
//　啊．．(
ReplaceAndPause();

['@02E5'];
SetDlgUpper(0, 0, false);
//李大娘：
//你要是有空的话，就到菜市场
//帮我买几斤新鲜的虾回来，要
//是在市场买不到，就向打渔的
//船家们问看看
SetDlgBox(0);
//得到五十文钱
CashModify(50, "");
VideoUpdate(0, false);
SetDlgLower(0, 0, false);
//李逍遥低声道：
//呼．．．还好
VideoUpdate(0, false);
SetDlgUpper(55, 0, false);
//李大娘：
//你在嘀咕什么？
VideoUpdate(0, false);
SetDlgLower(10, 0, false);
//李逍遥：
//没事！我马上就去
VideoUpdate(0, false);
Replace();
SetDlgUpper(0, 0, false);
//李大娘：
//记得哦！要新鲜的才买
ReplaceAndPauseWithNop("@0235", 0);

['@032C'];
//来福婶：
//我看呐～
//李大娘准是累出病来的！
ReplaceAndPause();
//来福婶：
//唉～　为谁辛苦为谁忙
//劳碌命喔．．

['@0348'];
NpcSetFrame(0);
['@0349'];
EventAnimate(0);
ReplaceAndPauseWithNop("@0349", 7);

['@0376'];
NpcMoveToBlock(54, 86, 0, 3);

['@0378'];
ReplaceAndPause();
NpcSetDirFrame(3, 0);
NpcMoveToBlockMutexLock(48, 92, 0, 2);
NpcSetDirFrame(3, 0);
NpcSetDirFrame(2, 0);
WaitEventAutoScriptRun(30, false, false);
NpcSetDirFrame(0, 0);
WaitEventAutoScriptRun(4, false, false);
NpcMoveToBlockMutexLock(56, 100, 1, 2);
NpcMoveToBlockMutexLock(54, 103, 0, 2);
WaitEventAutoScriptRun(20, false, false);
NpcMoveToBlock(54, 103, 1, 3);
NpcMoveToBlock(48, 109, 1, 3);
ReplaceAndPauseWithNop("Event_00023_00016_Auto", 0);

['@0387'];
EventSetPosRelToParty(4, 8, -128, 56);
EventSetDirFrame(4, 8, 2, 0);
EventSetAutoScript(4, 8, "@0376");
EventSetTriggerMode(4, 8, false, 2);
WaitEventAutoScriptRun(12, false, false);
SetDlgUpper(52, 0, false);
//香兰：
//不好了！不好了！
//李家哥哥．．李．．
//李大娘．．她．．
VideoUpdate(0, false);
SetDlgLower(2, 0, false);
//李逍遥：
//我婶婶怎么了？
VideoUpdate(0, false);
MusicStop(1);
SetDlgUpper(52, 0, false);
//香兰：
//你出门没多久．．
//李大娘就突然昏倒了！
//洪大夫请你赶快回去一趟
SetDlgLower(2, 0, false);
//李逍遥：
//婶婶怎么会．．
//好．．我马上回去！
MusicPlay(Music.孤雀无栖, true, true);
EventSetAutoScript(4, 8, "@0378");
EventSetTriggerScript(4, 8, "@03BB");
EventSetTriggerScript(4, 9, "@03B0");
EventSetTriggerScript(4, 11, "@032C");
EventSetState(4, 1, 0);
EventSetState(2, 5, 2);
EventSetState(10, 1, 0);
EventSetState(2, 4, 2);
EventSetState(2, 3, 1);
EventSetState(1, 20, 0);
EventSetState(1, 25, 0);
EventSetTriggerScript(1, 26, "@0220");
EventSetTriggerScript(1, 27, "@0226");
ReplaceAndPause();

['@03B0'];
SetDlgUpper(33, 0, false);
//秀兰：
//听大姊说～李大娘病了
//是真的吗？
//有没有我可以帮得上忙的？
VideoRestore();
//唉呀．．怎么会这样子呢
ReplaceAndPause();
//秀兰：
//李大娘的病严不严重啊？

['@03BB'];
SetDlgUpper(52, 0, false);
//香兰：
//李家哥哥！赶快回去吧
//李大娘的病似乎很严重呢

['@03C0'];
SetDlgUpper(52, 0, false);
//香兰：
//怎么了，李大娘好点了没？

['@042E'];
EventSetPos(5, 9, 1152, 1376);
EventSetTriggerScript(5, 9, "@05B9");
EventSetDirFrame(5, 9, 3, 0);
EventSetTriggerScript(5, 10, "@0615");
AddItem(219, 0);
EventSetTriggerScript(1, 25, "@048B");
EventSetAutoScript(3, 16, "@0490");
EventSetTriggerMode(3, 16, false, 1);
SetDlgUpper(59, 0, false);
//苗人头领：
//呵呵～你们汉人的书上有句话
//　"树欲静而风不止"
//　　"子欲养而亲不待"．．
//可真是至理名言哪～
VideoUpdate(0, false);
SetDlgLower(5, 0, false);
//李逍遥：
//我．．我绝不会让我婶婶死掉
//就算拼了命也要想办法医好她
VideoUpdate(0, false);
SetDlgUpper(59, 0, false);
//苗人头领：
//哈哈！难得你有这份孝心
//大慈大悲的菩萨一定也会
//被你感动的．．
VideoUpdate(0, false);
SetDlgLower(10, 0, false);
//李逍遥：
//菩萨．．？
VideoUpdate(0, false);
SetDlgUpper(59, 0, false);
//苗人头领：
//你不是想上仙灵岛求仙药吗？
//但．．没有仙缘的人，是无
//法通过岛上的仙法禁制的
VideoUpdate(0, false);
SetDlgLower(3, 0, false);
//李逍遥：
//是！是！恳请大爷指点
VideoUpdate(0, false);
SetDlgUpper(59, 0, false);
//苗人头领：
//仙灵岛中央有座"水月宫"，此处
//有一班精于炼制丹药的仙姑居
//于宫内，但是宫外有仙法所设
//下的迷阵，凡人若无邪法妖术
//并不会被其中的机关所伤，但
//是若无法破去阵眼，任你花上
//一辈子也找不到水月宫所在
VideoUpdate(0, false);
SetDlgLower(1, 0, false);
//李逍遥：
//那我该如何是好？
SetDlgUpper(59, 0, false);
//苗人头领：
//阵中有六具阿修罗神像，你用
//这"破天锤"将这些石像逐一敲
//碎，在迷阵的中央便会出现一
//块"发亮的石板"
//届时你只要往石板上一踏
//通路自会浮现
VideoUpdate(0, false);
SetDlgLower(1, 0, false);
//李逍遥：
//  你··怎么知道的？
VideoUpdate(0, false);
SetDlgUpper(59, 0, false);
//苗人头领：
//我是看你一片孝心，才泄漏
//这天机，你切勿自失良机
VideoUpdate(0, false);
SetDlgUpper(59, 0, false);
//苗人头领：
//对了．．　我这里有一颗丹丸
//服下它，可以保你不受仙灵岛
//上的瘴气所侵．．
SetDlgLower(1, 0, false);
//李逍遥：
//　　瘴气？
VideoUpdate(0, false);
SetDlgUpper(59, 0, false);
//苗人头领：
//照我的话做就对了
//难道你不想救你婶婶吗？
VideoUpdate(0, false);
SetDlgLower(9, 0, false);
//李逍遥：
//好！　我相信你
VideoUpdate(0, false);
SetDlgUpper(0, 0, false);
//"李逍遥收下破天锤，并服下"
//"苗人给的丹丸（忘忧散）"
ReplaceAndPause();
['@048B'];
//苗人头领：
//加油吧．．我等你的好消息

['@048E'];
NpcMoveToBlockMutexLock(32, 104, 1, 2);

['@0490'];
NpcMoveToBlockMutexLock(42, 94, 1, 2);
NpcMoveToBlockMutexLock(39, 91, 0, 2);
['@0492'];
EventWalkOneStep(-1, -1, -5, -5);
ReplaceAndPause();
EventWalkOneStep(-1, -1, -3, -3);
ReplaceAndPauseWithNop("@0492", 12);
NpcMoveToBlockMutexLock(37, 83, 1, 2);
GotoWithNop("@0196", 0);

['@04B4'];
EventSetDirFrame(4, 7, 0, 4);
VideoUpdate(0, false);
EventSetAutoScript(4, 7, "@8D77");
//丁大伯：
//你别老是来勾引我那两个丫头
//我可是只有这两个女儿！
SetDlgLower(0, 0, false);
//李逍遥：
//我没有哇！
//丁伯伯．．你可别老来糊涂了
//是你那两个宝贝女儿常常来巴
//结我和我婶婶．
ReplaceAndPause();
EventSetDirFrame(4, 7, 0, 4);
VideoUpdate(0, false);
EventSetAutoScript(4, 7, "@8D77");
//丁大伯：
//唉～我也懒得说你们了．．

['@04D5'];
EventSetTriggerMode(-1, -1, false, 2);
SetDlgUpper(52, 0, false);
//香兰：
//李家哥哥，我．．
//我在家里熬了一锅腊八粥
//你和李大娘要是有空，晚饭后
//就过来一趟吧，尝尝我的手艺
SetDlgLower(3, 0, false);
//李逍遥：
//好呀．．当然．．
//香兰姐煮的点心是出了名的，
//我婶婶说啊．．上回吃了你请
//的红豆汤，嘴巴直甜到现在呢
EventSetTriggerScript(4, 9, "@0505");
ReplaceAndPause();
['@04E4'];
SetDlgUpper(52, 0, false);
//香兰：
//嘻．．一定要来喔！

['@04E8'];
SetDlgUpper(52, 0, false);
//香兰：
//咦？
//家里的麻布袋怎么少了一个
//该不是被猫儿叼走了吧！
ReplaceAndPauseWithNop("@04E4", 0);

['@0505'];
SetDlgUpper(33, 0, false);
//秀兰：
//这么急着要哪．．
//嘻嘻！你看．．这件是我亲手
//缝制的布靴，你穿看看合不合
//你的脚？
SetDlgLower(3, 0, false);
//李逍遥：
//哦！谢谢你
AddItem(177, 0);
EventSetTriggerScript(4, 7, "@04B4");
ReplaceAndPause();
SetDlgUpper(33, 0, false);
//秀兰：
//你不可以跟我爹爹和我姊姊说
//我替你缝制布靴的事喔．．
EventSetTriggerScript(4, 8, "@04E8");

['@059C'];
VideoUpdate(0, false);
EventSetTriggerMode(-1, -1, false, 2);
SetDlgUpper(39, 0, false);
//张四：
//少听他们吹牛，我也到过那
//仙灵岛，哪有什么仙女？
VideoRestore();
//只有一个又老又丑的凶肥婆
//看到我二话不说，就把我赶
//了出来！
SetDlgLower(1, 0, false);
//李逍遥：
//你们该不是见鬼了吧？
//那荒岛上怎么会有人．．
SceneSetScript(5, "@0387", "");
ReplaceAndPause();
SetDlgUpper(39, 0, false);
//张四：
//逍遥老弟，店里没事吗？
//你不回去帮忙，还在这闲逛
//要是给李大娘知道了，你一
//定挨骂的
ReplaceAndPause();
SetDlgUpper(39, 0, false);
//张四：
//老天保佑．．保佑我今天出海
//能打到鱼，再这么下去，一家
//老小都要喝西北风了．．

['@05B9'];
EventSetTriggerMode(5, 2, true, 2);
EventSetTriggerScript(5, 2, "@05E5");
SetDlgUpper(39, 0, false);
//张四：
//你想出海？这可不是闹着玩的
//我是到过仙灵岛没错，但是现
//在的天色也不早了，到了晚上
//风浪还会更大的．．
SetDlgLower(10, 0, false);
//李逍遥：
//张四哥～请你无论如何要帮我
//这个忙，要救我婶婶的命只有
//这个法子了
VideoUpdate(0, false);
SetDlgUpper(39, 0, false);
//张四：
//这．．．．．好吧！我试试看
//李大娘平日待人还不错，我想
//老天应该也会可怜好人吧
EventAnimate(0);
VideoUpdate(0, false);
EventAnimate(0);
VideoUpdate(0, false);
EventAnimate(0);
VideoUpdate(0, false);
EventAnimate(0);
VideoUpdate(0, false);
EventAnimate(0);
VideoUpdate(0, false);
EventAnimate(0);
VideoUpdate(0, false);
EventAnimate(0);
VideoUpdate(0, false);
EventAnimate(0);
VideoUpdate(0, false);
EventSetState(-1, -1, 0);
EventSetState(5, 3, 2);
EventSetAutoScript(5, 3, "");
VideoUpdate(0, false);
SetDlgUpper(39, 0, false);
//张四：
//走吧～上船！
ReplaceAndPause();

['@05E5'];
PartyWalkToBlock(38, 86, 0, 2);
VideoUpdate(0, false);
RoleSetDirFrame(0, 0, 1);
VideoUpdate(0, false);
RoleSetDirFrame(0, 0, 0);
VideoUpdate(0, false);
EventSetAutoScript(5, 3, "@8D33");
RideNpcToPos(47, 77, 0, 2);
FadeOut(0);
RoleSetDirFrame(0, 0, 0);
PartySetPos(23, 50, 1);
SceneEnter(15);

['@05F2'];
//张四：
//希望这求来的丹药真的灵验
ReplaceAndPause();
//张四：
//希望明天是个好天气

['@0615'];
SetDlgLower(10, 0, false);
//李逍遥：
//水生叔！救人如救火！劳您驾
//带我上仙灵岛吧！
VideoUpdate(0, false);
SetDlgUpper(0, 0, false);
//水生叔：
//啥！风浪这么大，你不要命了
//是不是？昨儿个为了贪看仙女
//船险些翻了，我可不敢再去！
ReplaceAndPause();
SetDlgLower(10, 0, false);
//李逍遥：
//水生叔～求求您．．
//您是这一带经验最老到的渔夫
//您不行，那还有谁能行呢？
VideoUpdate(0, false);
SetDlgUpper(0, 0, false);
Replace();
//水生叔：
//不行就是不行！你找别人吧！

['@0675'];
SetDlgCenter(0, false);
//李大娘仍昏睡着．．

['@0678'];
EventSetStateSequence(4, 26, 4, 27, 2);
EventSetTriggerScript(4, 26, "Event_00005_00030_Trigger");
EventSetTriggerScript(4, 27, "Event_00005_00030_Trigger");
EventSetStateSequence(4, 28, 4, 29, 2);
EventSetTriggerScript(4, 28, "Event_00005_00030_Trigger");
EventSetTriggerScript(4, 29, "Event_00005_00030_Trigger");
EventSetState(1, 26, 0);
EventSetState(1, 27, 0);
EventSetState(3, 17, 2);
EventSetState(3, 18, 2);
EventSetState(3, 16, 2);
EventSetTriggerScript(3, 16, "@072E");
EventSetTriggerMode(3, 16, true, 3);
EventSetAutoScript(3, 16, "");
EventSetAutoScript(3, 17, "");
EventSetAutoScript(3, 18, "");
EventSetTriggerMode(3, 17, false, -1);
EventSetTriggerMode(3, 18, false, -1);
EventSetPos(3, 16, 1032, 1672);
EventSetPos(3, 17, 1008, 1656);
EventSetPos(3, 18, 1056, 1680);
EventSetState(4, 37, 0);
EventSetState(13, 2, 2);
EventSetTriggerScript(14, 0, "@0F0E");
EventSetState(11, 0, 0);
EventSetState(8, 2, 1);
EventSetState(8, 3, 2);
EventSetState(8, 4, 2);
EventSetStateSequence(4, 2, 4, 18, 0);
EventSetState(1, 0, 0);
EventSetTriggerScript(4, 20, "@0DBD");
EventSetState(1, 0, 0);
EventSetState(2, 3, 1);
VideoUpdate(0, false);
SetDlgCenter(0, false);
//"李大娘服下紫金丹．．"
RemoveItem(213, 0, "");
VideoUpdate(0, false);
SetDlgLower(0, 0, false);
//李逍遥：
//怎．．怎么头昏昏的？
VideoUpdate(0, false);
MusicStop(0);
RoleSetDirFrame(3, 0, 0);
WaitEventAutoScriptRun(6, false, false);
RoleMoveOneStep(-4, -2, 0);
WaitEventAutoScriptRun(2, false, false);
RoleMoveOneStep(-8, -4, 0);
WaitEventAutoScriptRun(0, false, false);
RoleMoveOneStep(-8, -4, 0);
WaitEventAutoScriptRun(2, false, false);
RoleMoveOneStep(-8, -4, 0);
WaitEventAutoScriptRun(0, false, false);
RoleMoveOneStep(-8, -4, 0);
WaitEventAutoScriptRun(3, false, false);
RoleMoveOneStep(-12, -6, 0);
VideoUpdate(0, false);
RoleSetDirFrame(0, 0, 0);
VideoUpdate(0, false);
RoleSetDirFrame(1, 0, 0);
VideoUpdate(0, false);
RoleSetDirFrame(2, 0, 0);
VideoUpdate(0, false);
RoleSetDirFrame(3, 0, 0);
WaitEventAutoScriptRun(4, false, false);
RoleMoveOneStep(-32, 0, 0);
HeroSetSprite(0, 193, true);
RoleSetDirFrame(0, 0, 0);
VideoUpdate(0, false);
PlaySound(93);
SetDlgCenter(0, false);
//"李逍遥先前服下的忘忧散"
//"发作，昏倒在地．．"
FadeOut(0);
EventSetState(-1, -1, 0);
EventSetState(2, 8, 1);
EventSetState(5, 0, 1);
EventSetState(4, 0, 1);
MusicPlay(Music.神木林_变奏, true, false);
SetPaletteTime(1);
VideoUpdate(2, false);
SetDlgCenter(0, false);
//"夜晚．．"
VideoUpdate(0, false);
SetDlgLower(55, 0, false);
//李大娘：
//逍遥！你不在自己房里睡
//躺在这儿干嘛？
VideoUpdate(0, false);
SetDlgUpper(10, 0, false);
//李逍遥：
//唔．．．　我怎么会在这！？
HeroSetSprite(0, 2, true);
RoleSetDirFrame(3, 0, 0);
VideoUpdate(0, false);
SetDlgUpper(3, 0, false);
//李逍遥：
//对了！婶婶．．
//我有很重要的事要跟您说
SetDlgLower(55, 0, false);
//什么事？！
VideoUpdate(0, false);
SetDlgUpper(10, 0, false);
//李逍遥：
//是．．是．．
//咦？怎么突然想不起来了
//我明明．．明明．．．
VideoUpdate(0, false);
//"李逍遥从昨天出发到仙灵岛"
//"至拿药回来的记忆全失去了"
VideoUpdate(0, false);
SetDlgLower(55, 0, false);
//李大娘：
//我看你又是在作梦！
//回房间睡觉去！
FadeOut(0);
EventSetState(3, 5, 1);
EventSetState(3, 27, 2);
EventSetState(3, 28, 2);
EventSetDirFrame(3, 27, 0, 0);
EventSetDirFrame(3, 28, 0, 0);
EventSetState(2, 8, 0);
HeroSetSprite(0, 193, true);
SceneSetScript(2, "@06F6", "");
SceneEnter(2);

['@06F6'];
PartySetPos(41, 15, 1);
RoleSetDirFrame(0, 11, 0);
WaitEventAutoScriptRun(15, false, false);
SetDlgLower(8, 0, false);
//奇怪．．好像有件很重要的事
//就是想不起来．．？
WaitEventAutoScriptRun(10, false, false);
RoleSetDirFrame(0, 10, 0);
VideoUpdate(0, false);
SetDlgLower(3, 0, false);
//哎呀．．差点给忘了！
//那位讨酒喝的老道士说～
//山神庙．．要教我剑法．．
PartySetPos(41, 16, 0);
RoleSetDirFrame(0, 1, 0);
VideoUpdate(0, false);
PartySetPos(41, 17, 0);
VideoUpdate(0, false);
RoleSetDirFrame(0, 2, 0);
VideoUpdate(0, false);
HeroSetSprite(0, 2, true);
RoleSetDirFrame(0, 0, 0);
VideoUpdate(0, false);
SetDlgLower(9, 0, false);
//反正睡不着，何不去会他一会
//？说不定我真的是遇到高人了
ReplaceAndPause();

['@0725'];
//鱼嫂：
//你们刚走不久，就有一个苗人
//出了一大笔银子，租下水生叔
//的船，水生叔一口就答应下来
//这回不知又跑到哪喝花酒去了
ReplaceAndPause();
//这年头只要有钱，杀头的生意
//都有人干

['@072E'];
EventSetTriggerMode(-1, -1, false, 1);
SetDlgLower(59, 0, false);
//苗人头领：
//小兄弟，求得灵药了吧？
SetDlgUpper(7, 0, false);
//李逍遥：
//灵药！？　什么灵药？
VideoUpdate(0, false);
SetDlgLower(59, 0, false);
//苗人头领：
//呵呵．．果然有效．．
//对了！现在是什么时辰了
SetDlgUpper(1, 0, false);
//李逍遥：
//哦．．三更天了
VideoUpdate(0, false);
SetDlgLower(59, 0, false);
//苗人头领：
//嗯～是时候了
VideoUpdate(0, false);
SetDlgLower(59, 0, false);
//苗人头领：
//小兄弟，我们现在有事要出去
//一趟，明天一早才会回来，你
//现在可以打烊，不必等我们了
EventSetState(1, 0, 2);
EventSetAutoScript(3, 16, "@0763");
EventSetAutoScript(3, 17, "@0766");
EventSetAutoScript(3, 18, "@076A");
WaitEventAutoScriptRun(10, false, false);
SetDlgUpper(1, 0, false);
//李逍遥：
//这么晚了，三位要上哪去呀？
SetDlgLower(59, 0, false);
//苗人头领：
//小兄弟．．少知道一些事情
//可以活久一点！
VideoUpdate(0, false);
SetDlgLower(59, 0, false);
//苗人头领：
//要不是看你蛮听话的，昨天我
//就赏你一颗金蚕蛊啦！
//哈．．哈．．哈～
WaitEventAutoScriptRun(26, false, false);
SetDlgUpper(7, 0, false);
//李逍遥：
//哼、装得神秘兮兮的．．
//一定不是去干啥好事！
VideoUpdate(0, false);
SetDlgUpper(1, 0, false);
//李逍遥：
//算了！　客人的闲事少管．．

['@0763'];
NpcMoveToBlockMutexLock(30, 106, 1, 2);
EventSetState(-1, -1, 0);

['@0766'];
NpcMoveToBlockMutexLock(32, 104, 1, 2);
NpcMoveToBlock(30, 106, 1, 3);
EventSetState(-1, -1, 0);

['@076A'];
NpcMoveToBlockMutexLock(33, 105, 0, 2);
NpcMoveToBlockMutexLock(31, 107, 0, 2);
EventSetState(-1, -1, 0);

['@07D8'];
//洪大夫：
//小李子，是不是跟人打架啦？
//真是．．这点小伤，我替你扎
//个几针，再推拿几下就没事了
RoleModifyHPMP(true, 9999);
FadeOut(0);
VideoUpdate(0, false);
//洪大夫：
//呵～老邻居了，不收你的钱

['@07E2'];
//洪大夫：
//我这儿还留有一颗上好的灵芝
//看在老邻居的份上就送给你吧
//不过这药只能补补元气，李大
//娘的病，恕我爱莫能助．．
AddItem(47, 0);
ReplaceAndPause();
JumpIfNotAllRolesFullHP("@07D8");
//洪大夫：
//还想要抓那些药方？
VideoUpdate(0, false);
ShowBuyItemMenu(1);

['@081B'];
PlaySound(93);
WaitEventAutoScriptRun(3, false, false);
PlaySound(93);
WaitEventAutoScriptRun(3, false, false);
PlaySound(93);
SetDlgLower(10, 0, false);
//李逍遥：
//洪大夫，您开开门啊～
VideoUpdate(0, false);
PlaySound(93);
Delay(4);
PlaySound(93);
SetDlgLower(10, 0, false);
//李逍遥：
//洪大夫！洪大夫～
VideoUpdate(0, false);
PlaySound(93);
Delay(6);
EventSetState(4, 28, 0);
EventSetState(4, 29, 0);
VideoUpdate(0, false);
EventSetState(4, 31, 2);
VideoUpdate(0, false);
SetDlgUpper(0, 0, false);
//洪大夫：
//三更半夜的，是谁在敲门呀～
VideoUpdate(0, false);
SetDlgLower(2, 0, false);
//李逍遥：
//洪大叔，劳您的驾．．
//丁伯伯的哮喘病又发作了，看
//起来似乎很严重呢，请您赶快
//过去看看吧．．
VideoUpdate(0, false);
SetDlgUpper(0, 0, false);
//洪大夫：
//好～好的．．我马上就过去
VideoUpdate(0, false);
EventSetState(4, 31, 0);
EventSetState(8, 5, 2);
EventSetTriggerScript(10, 1, "@088F");
EventSetAutoScript(8, 4, "Event_00006_00014_Auto");
EventSetDirFrame(8, 3, 2, 0);
SceneSetScript(9, "@084C", "");
PartySetPos(37, 21, 0);
RoleSetDirFrame(3, 0, 0);
FadeOut(0);
SceneEnter(9);

['@084C'];
VideoUpdate(0, false);
EventSetDirFrame(8, 5, 1, 0);
VideoUpdate(0, false);
EventSetDirFrame(8, 3, 3, 0);
VideoUpdate(0, false);
SetDlgUpper(0, 0, false);
//洪大夫：
//你们可以放心
//已经稳定下来，没有危险了
//万一有什么情况，再过来找我
FadeOut(2);
EventSetDirFrame(8, 3, 0, 0);
RoleSetDirFrame(0, 0, 0);
EventSetState(8, 5, 0);
VideoUpdate(0, false);
EventSetDirFrame(8, 3, 1, 0);
VideoUpdate(0, false);
SetDlgUpper(52, 0, false);
//香兰：
//李家哥哥．．我．．我们
//真不知该怎么感谢您
RoleSetDirFrame(3, 0, 0);
VideoUpdate(0, false);
SetDlgLower(1, 0, false);
//李逍遥：
//不用了，我也没帮上什么忙
//只是跑跑腿而已．．
EventSetTriggerScript(8, 3, "@086B");
EventSetTriggerScript(8, 4, "@086E");
ReplaceAndPause();

['@086B'];
SetDlgUpper(52, 0, false);
//谢谢你．．

['@086E'];
SetDlgUpper(35, 0, false);
//秀兰：
//李大哥．．我好怕～
//你留下来陪我们好不好？
VideoUpdate(0, false);
SetDlgLower(1, 0, false);
//李逍遥：
//大夫不是已经说了吗，你爹爹
//已经不会有事了，你放心吧。
//我有点事，要到山神庙走一趟
VideoUpdate(0, false);
SetDlgUpper(35, 0, false);
//秀兰：
//那不是要经过西边的十里坡？
//听说～那里到了晚上会有鬼怪
//出来吃人，很可怕呢．．
VideoUpdate(0, false);
SetDlgLower(6, 0, false);
//李逍遥：
//哈哈～那是大人用来吓小孩的
//你也信？
VideoUpdate(0, false);
SetDlgLower(9, 0, false);
//李逍遥：
//我今早跟一位老前辈有约在
//山神庙，他要教我剑法
SetDlgUpper(34, 0, false);
//秀兰：
//你才是傻小孩哩，那个疯疯癫
//癫的老酒鬼讲的话你也当真？
ReplaceAndPause();
//哼～走嘛．不理你了

['@088F'];
SetDlgUpper(0, 0, false);
//洪大夫：
//被你这么一弄
//这下子我可又没得睡了
ReplaceAndPauseWithNop("Event_00011_00001_Trigger", 0);

['@0938'];
MusicStop(1);
VideoUpdate(0, false);
SetDlgLower(10, 0, false);
//啥．．已经天亮了呀
//惨了～等会回去又要挨骂了
MusicPlay(Music.灵山, true, false);
SceneSetScript(5, "Scene_00005_Enter", "");
ReplaceAndPause();

['@0941'];
VideoUpdate(0, false);
EventSetTriggerMode(-1, -1, false, 1);
SetDlgUpper(55, 0, false);
//李大娘：
//你昨晚又跑到哪玩了？居然到
//早上才回来，连店门也没拴！
//万一遭了小偷怎么办！
VideoUpdate(0, false);
SetDlgLower(9, 0, false);
//李逍遥：
//婶婶！我昨晚遇到一位仙人呢
//就是一大早躺在店门口要酒喝
//的那个道士，他还教了我一套
//剑法，你要不要瞧看看．．
VideoUpdate(0, false);
SetDlgUpper(55, 0, false);
//李大娘：
//别在那瞎说梦话，对了．．
//那些苗人客官今早回来时又
//要多订一间客房
SetDlgLower(1, 0, false);
//李逍遥：
//可是．．咱们客栈也才不过
//两间客房吧
VideoUpdate(0, false);
SetDlgUpper(55, 0, false);
//李大娘：
//我上楼找不到你，就把你的房
//间收拾收拾，先让给客官住下
VideoUpdate(0, false);
SetDlgLower(2, 0, false);
//李逍遥：
//啥！那我要睡哪里？
VideoUpdate(0, false);
SetDlgUpper(55, 0, false);
//李大娘：
//他们今晚就要走了，就忍耐一
//下吧，一天不睡午觉又不会死
VideoUpdate(0, false);
SetDlgLower(1, 0, false);
//李逍遥：
//哦～我的房间是住了谁？
VideoUpdate(0, false);
SetDlgUpper(55, 0, false);
//李大娘：
//也没住人，就只见他们抬了一
//只鼓鼓的麻布袋进去，也不许
//咱们任何人进去那房间
VideoUpdate(0, false);
SetDlgLower(9, 0, false);
//李逍遥：
//哦？这般人神神秘秘的
//莫非是啥宝贝不成．．
VideoUpdate(0, false);
Replace();
SetDlgUpper(55, 0, false);
//李大娘：
//你管人家那么多干啥？
//快去梳洗一下，准备吃早饭啦
EventSetAutoScript(3, 13, "");
EventSetTriggerScript(1, 4, "@097F");

['@097F'];
//这样走出去会被发现的
RoleMoveOneStep(8, -4, 0);
WaitEventAutoScriptRun(0, false, false);
RoleMoveOneStep(8, -4, 0);
WaitEventAutoScriptRun(0, false, false);
RoleMoveOneStep(8, -4, 0);
WaitEventAutoScriptRun(0, false, false);
RoleMoveOneStep(8, -4, 0);
WaitEventAutoScriptRun(0, false, false);

['@0989'];
//旺财嫂：
//早呀！你婶婶的病好了点没？
SetDlgLower(0, 0, false);
//李逍遥：
//托您的福，已经没事了

['@098F'];
//来福婶：
//小李子呀，你婶婶大病初愈
//别再让她太操劳了

['@0993'];
SetDlgUpper(52, 0, false);
//香兰：
//我爹病了，大夫说只要能渡过
//这几天就会没事了，我们姐妹
//俩得轮流看护他
SetDlgLower(0, 0, false);
//李逍遥：
//丁大伯有你们两个这么孝顺的
//好女儿，一定会好起来的

['@099D'];
SetDlgUpper(33, 0, false);
//秀兰：
//李大哥是来探望我爹的病吗？
ReplaceAndPause();
SetDlgUpper(35, 0, false);
//秀兰：
//爹爹的病是多年的老毛病了
//可是一直都治不好

['@09A6'];
VideoUpdate(0, false);
EventSetTriggerMode(-1, -1, false, 1);
//苗人喽啰：
//贼头贼脑的瞧什么？
//没有吩咐不准靠近这房间！

['@09AC'];
EventSetTriggerMode(-1, -1, false, 1);
SetDlgUpper(87, 0, false);
//王小虎：
//逍遥哥哥！
//你教我如何造秘道好不好？
VideoUpdate(0, false);
SetDlgLower(1, 0, false);
//李逍遥：
//这．．太乱来了吧
//给你爹知道的话，准挨揍的
VideoUpdate(0, false);
SetDlgUpper(87, 0, false);
//可是～你自己还不是在房间做
//了一个秘道，通到楼下的柴房
SetDlgLower(1, 0, false);
//李逍遥：
//嘘～别大声嚷嚷，给我婶婶知
//道就惨了，改天我再教你吧
VideoUpdate(0, false);
SetDlgUpper(87, 0, false);
//又是改天哪～
//逍遥大哥最爱赖皮了

['@0A36'];
NpcSetDirFrame(2, 0);
['@0A37'];
EventWalkOneStep(-1, -1, 16, -8);
GotoWithNop("@0A37", 9);
NpcSetDirFrame(1, 0);

['@0A3B'];
NpcSetDirFrame(0, 0);
['@0A3C'];
EventWalkOneStep(-1, -1, -16, 8);
GotoWithNop("@0A3C", 9);
EventSetState(-1, -1, 0);

['@0A40'];
VideoUpdate(0, false);
EventSetTriggerMode(-1, -1, false, 1);
SetDlgUpper(55, 0, false);
//李大娘：
//你疯了是不是！得罪了客官
//咱们生意还做不做？
VideoUpdate(0, false);
SetDlgLower(5, 0, false);
//李逍遥：
//婶婶～
//那些苗人根本是采花贼
//这位姑娘差点就被抓去卖掉
VideoUpdate(0, false);
SetDlgUpper(55, 0, false);
//李大娘：
//哎呦～　真是该打
//咦？这丫头是哪户人家的千金
//我怎么从没见过？
VideoUpdate(0, false);
SetDlgLower(1, 0, false);
//李逍遥：
//婶婶～您别尽盯着人家瞧呐！
//我得尽快将这位姑娘送回家去
SetDlgUpper(55, 0, false);
//李大娘：
//你可得快去快回啊！
//别又惹上麻烦了
EventSetTriggerScript(5, 9, "@0A68");
EventSetState(20, 2, 0);
EventSetState(20, 8, 0);
EventSetState(20, 9, 2);
EventSetState(20, 11, 1);
EventSetState(20, 12, 1);
EventSetStateSequence(19, 10, 19, 16, 0);
EventSetStateSequence(20, 13, 20, 18, 2);
ReplaceAndPause();
SetDlgUpper(55, 0, false);
//李大娘：
//千万别再惹麻烦．．

['@0A68'];
EventSetTriggerMode(5, 2, true, 2);
EventSetTriggerScript(5, 2, "@05E5");
EventSetTriggerScript(14, 1, "@13B0");
SceneSetScript(15, "@140C", "");
SetDlgUpper(39, 0, false);
//张四：
//我没听错吧？
//这位姑娘也要去仙灵岛！
VideoUpdate(0, false);
SetDlgUpper(39, 0, false);
//张四：
//小姐！你也是去求仙丹的吗？
//仙灵岛可不是啥好玩的地方啊
//听说～岛上有吃人的妖怪哦！
VideoUpdate(0, false);
SetDlgLower(18, 0, false);
//赵灵儿：
//你乱讲！　才不是妖怪呢
VideoUpdate(0, false);
SetDlgLower(10, 0, false);
//李逍遥：
//四哥～　拜托拜托嘛．．
//眼前就只有您能帮我这个忙了
//现在没时间多作解释，总而言
//之，是人命关天的事就对了
SetDlgUpper(39, 0, false);
//张四：
//好吧．．既然是逍遥老弟拜托
//四哥我就帮到底啦～上船吧！
EventAnimate(0);
VideoUpdate(0, false);
EventAnimate(0);
VideoUpdate(0, false);
EventAnimate(0);
VideoUpdate(0, false);
EventAnimate(0);
VideoUpdate(0, false);
EventAnimate(0);
VideoUpdate(0, false);
EventAnimate(0);
VideoUpdate(0, false);
EventAnimate(0);
VideoUpdate(0, false);
EventAnimate(0);
VideoUpdate(0, false);
EventSetState(-1, -1, 0);
EventSetState(5, 3, 2);
EventSetAutoScript(5, 3, "");
EventSetPos(5, 3, 1120, 1424);
VideoUpdate(0, false);
SetDlgUpper(39, 0, false);
//张四：
//我就好人做到底
//再跑这一趟吧！

['@0A9F'];
SetBattleMusic(Music.势如破竹_副本);
SetBattlefield(FbpWin.客栈);
BattleStart(19, "@A073", "");
MusicPlay(Music.血海余生, true, false);
BattleEnd();
PartySetRole(1, 0, 0);
EventSetState(3, 25, 2);
EventSetPos(3, 25, 1184, 1696);
EventSetDirFrame(3, 25, 1, 0);
PartySetPos(36, 106, 0);
RoleSetDirFrame(1, 0, 0);
EventSetPos(3, 16, 1056, 1648);
EventSetPos(3, 15, 1088, 1664);
EventSetState(3, 17, 0);
EventSetState(3, 18, 0);
EventSetAutoScript(3, 16, "");
EventSetDirFrame(3, 16, 3, 0);
EventSetState(3, 13, 2);
EventSetPos(3, 13, 992, 1712);
EventSetPos(3, 14, 1072, 1672);
EventSetDirFrame(3, 13, 2, 0);
EventSetAutoScript(3, 13, "@0C87");
WaitEventAutoScriptRun(22, false, false);
SetDlgLower(55, 0, false);
//李大娘：
//又怎么啦！　发生什么事了？
EventSetState(3, 16, 0);
EventSetState(3, 15, 2);
EventSetState(3, 13, 0);
EventSetState(3, 14, 2);
VideoUpdate(0, false);
SetDlgUpper(0, 0, false);
//苗人头领：
//不许动！
//不然我就要这老太婆的命
VideoUpdate(0, false);
PartyWalkToBlock(35, 105, 0, 4);
VideoUpdate(0, false);
SetDlgLower(5, 0, false);
//李逍遥：
//啊．．你！你卑鄙！！
//快放开我婶婶．．
VideoUpdate(0, false);
EventSetDirFrame(3, 14, 0, 1);
VideoUpdate(0, false);
PlaySound(92);
EventSetDirFrame(3, 15, 0, 1);
VideoUpdate(0, false);
EventSetDirFrame(3, 17, 0, 0);
EventSetDirFrame(3, 18, 0, 0);
EventSetDirFrame(3, 15, 0, 2);
EventModifyPos(3, 15, -16, -16);
VideoUpdate(0, false);
EventModifyPos(3, 15, -16, -16);
EventSetLayer(3, 15, 3);
VideoUpdate(0, false);
EventModifyPos(3, 15, -16, -8);
VideoUpdate(0, false);
EventModifyPos(3, 15, -16, -8);
VideoUpdate(0, false);
PlaySound(90);
WaitEventAutoScriptRun(2, false, false);
EventModifyPos(3, 15, 0, 2);
WaitEventAutoScriptRun(0, false, false);
EventModifyPos(3, 15, 0, 4);
VideoUpdate(0, false);
EventModifyPos(3, 15, 0, 8);
EventSetLayer(3, 15, 0);
VideoUpdate(0, false);
PlaySound(93);
WaitEventAutoScriptRun(6, false, false);
EventSetDirFrame(3, 14, 0, 2);
VideoUpdate(0, false);
SetDlgLower(55, 0, false);
//李大娘：
//谁是老太婆呀！你们这几个不
//长眼睛的混蛋先给我打听清楚
//老娘是何许人物？
VideoRestore();
//竟敢在我的店里撒野？要闹事
//就给我滚到别处去，小心老娘
//拆了你们的骨头拿去熬汤！
VideoRestore();
//喂．．黑脸的？　喂．．
EventSetState(3, 13, 2);
EventSetState(3, 14, 0);
EventSetDirFrame(3, 13, 1, 0);
EventSetAutoScript(3, 13, "@0B39");
WaitEventAutoScriptRun(15, false, false);
VideoUpdate(0, false);
SetDlgLower(55, 0, false);
//李大娘：
//糟糕～　一不小心用了穿云掌
//这胖子大概没救了．．
PartyWalkToBlock(34, 104, 0, 4);
VideoUpdate(0, false);
SetDlgLower(10, 0, false);
//李逍遥：
//哇．．婶婶！你好厉害喔．．
EventSetDirFrame(3, 13, 3, 0);
VideoUpdate(0, false);
SetDlgUpper(55, 0, false);
//李大娘：
//这种三脚猫货色我才不放
//在眼里，想当年你婶婶我．．
//算了．．不提了。
VideoRestore();
//喂～　你高兴个什么劲
//闹出人命啦！这下怎么收拾？
VideoUpdate(0, false);
SetDlgLower(1, 0, false);
//李逍遥：
//这班苗匪杀人越货、强掳弱女
//死有余辜！婶婶这是替天行道
SetDlgUpper(55, 0, false);
//李大娘：
//去你的．．就会说风凉话，
//日后官差问起来总是件麻烦事
VideoUpdate(0, false);
SetDlgLower(1, 0, false);
//李逍遥：
//那．．这位小姑娘怎么办？
//她的一家人全遇难了
//咱们总不能不管吧？
VideoUpdate(0, false);
SetDlgUpper(55, 0, false);
//李大娘：
//唉～　造孽．．．
//那就让她在这里住下来吧。
//你去楼上挑一间比较安静的
//房间，让她好好休息一下。
//人家遇到这种惨事，心里一定
//很难过。你可要多多关照人家
//别让她想不开呀！
SetDlgLower(9, 0, false);
//李逍遥：
//放心．．我知道
FadeOut(0);
EventModifyPos(3, 13, 0, 16);
EventSetTriggerScript(3, 13, "@0B47");
EventSetTriggerMode(3, 13, true, 2);
EventSetState(1, 10, 0);
EventSetTriggerScript(1, 9, "@0B5D");
EventSetTriggerScript(1, 8, "@0B5D");
EventSetTriggerScript(4, 1, "@0D92");
EventSetTriggerScript(4, 9, "@0CBD");
EventSetState(3, 25, 0);
EventSetState(3, 15, 0);
EventSetState(1, 30, 0);
EventSetState(1, 31, 1);
SceneSetScript(2, "@0B3C", "");
SceneEnter(2);
MusicPlay(Music.盟誓, true, false);

['@0B39'];
NpcMoveToBlock(34, 104, 0, 3);
NpcMoveToBlock(33, 103, 0, 3);

['@0B3C'];
PartySetPos(22, 20, 1);
RoleSetDirFrame(2, 0, 0);
VideoUpdate(0, false);
SetDlgLower(6, 0, false);
//李逍遥：
//她真的是累坏了．．
ReplaceAndPause();

['@0B47'];
SetDlgLower(55, 0, false);
//李大娘：
//小姑娘还好吧？
SetDlgUpper(1, 0, false);
//李逍遥：
//倒头便睡着了
//看来．．她一夜都未曾合过眼
VideoUpdate(0, false);
SetDlgLower(55, 0, false);
//李大娘：
//好吧．．这里没你的事了
//回房去吧．．
EventSetState(1, 31, 0);
FadeOut(0);
FadeFbp(FbpWin.黑底屏, 0);
FadeIn(-1);
//"　　　　　当夜．．"
FadeOut(0);
SceneEnter(2);
SceneSetScript(2, "@0B68", "");
EventSetState(-1, -1, 0);

['@0B5D'];
SetDlgCenter(0, false);
//"密道坏了．．"
VideoUpdate(0, false);
SetDlgLower(10, 0, false);
//李逍遥：
//啊．．一定是上次跟苗人
//打架给打坏了
ReplaceAndPause();
SetDlgCenter(0, false);
//"密道坏了．．"

['@0B68'];
HeroSetSprite(0, 193, true);
PartySetPos(41, 15, 1);
RoleSetDirFrame(0, 11, 0);
SetPaletteTime(1);
WaitEventAutoScriptRun(10, false, false);
//"门外传来哭泣声．．"
HeroSetSprite(0, 2, true);
RoleSetDirFrame(0, 0, 0);
PartySetPos(40, 16, 1);
VideoUpdate(0, false);
SetDlgLower(1, 0, false);
//是谁呀？
EventSetState(3, 25, 2);
EventSetDirFrame(3, 25, 0, 0);
EventSetTriggerMode(3, 25, true, 3);
EventSetTriggerScript(3, 25, "@0B7B");
EventSetPos(3, 25, 1616, 1528);
ReplaceAndPause();

['@0B7B'];
WaitEventAutoScriptRun(2, false, false);
RoleSetDirFrame(3, 0, 0);
WaitEventAutoScriptRun(5, false, false);
PartyWalkToBlock(50, 95, 0, 2);
WaitEventAutoScriptRun(4, false, false);
SetDlgUpper(1, 0, false);
//李逍遥：
//你怎么了？
VideoUpdate(0, false);
SetDlgLower(15, 0, false);
//赵灵儿：
//逍遥哥哥．．我好怕．．
//我．．我又梦见姥姥被．．
VideoUpdate(0, false);
SetDlgUpper(1, 0, false);
//李逍遥：
//是不是作了恶梦？
//别怕．．　在这里很安全
//我跟婶婶都会保护你的．．
VideoUpdate(0, false);
SetDlgLower(17, 0, false);
//赵灵儿：
//我要跟你一起睡．．
SetDlgUpper(10, 0, false);
//李逍遥：
//啥！？　一起．．．
VideoUpdate(0, false);
RoleSetDirFrame(0, 0, 0);
WaitEventAutoScriptRun(4, false, false);
RoleSetDirFrame(3, 0, 0);
VideoUpdate(0, false);
SetDlgUpper(10, 0, false);
//李逍遥：
//这．．不太妥吧！？
SetDlgLower(17, 0, false);
//赵灵儿：
//为什么不行．．？
VideoUpdate(0, false);
SetDlgUpper(9, 0, false);
//李逍遥：
//我是很同情你，但．．这
//男女授受不亲．．你懂吧？
WaitEventAutoScriptRun(5, false, false);
NpcSetDirFrame(0, 0);
VideoUpdate(0, false);
SetDlgLower(15, 0, false);
//赵灵儿：
//你．．你是不是嫌弃我！
NpcSetDirFrame(3, 0);
VideoUpdate(0, false);
SetDlgLower(15, 0, false);
//赵灵儿：
//呜．．．
//逍遥哥哥也不要灵儿了吗？！
RoleSetDirFrame(0, 0, 0);
WaitEventAutoScriptRun(4, false, false);
RoleSetDirFrame(3, 0, 0);
WaitEventAutoScriptRun(5, false, false);
RoleSetDirFrame(2, 0, 0);
WaitEventAutoScriptRun(4, false, false);
RoleSetDirFrame(3, 0, 0);
WaitEventAutoScriptRun(0, false, false);
SetDlgUpper(10, 0, false);
//李逍遥：
//我！？　这．．．
EventSetState(3, 13, 2);
EventSetDirFrame(3, 13, 3, 0);
EventSetPos(3, 13, 1440, 1456);
EventSetAutoScript(3, 13, "@0BF8");
WaitEventAutoScriptRun(12, false, false);
SetDlgUpper(55, 0, false);
//李大娘：
//逍遥！　你欺负人家啦？
PartyWalkToBlock(49, 95, 1, 4);
PartyWalkToBlock(47, 93, 1, 4);
WaitEventAutoScriptRun(2, false, false);
RoleSetDirFrame(3, 0, 0);
WaitEventAutoScriptRun(6, false, false);
RoleSetDirFrame(0, 0, 0);
VideoUpdate(0, false);
RoleSetDirFrame(1, 0, 0);
VideoUpdate(0, false);
SetDlgLower(10, 0, false);
//李逍遥：
//我哪敢啊！？
EventSetAutoScript(3, 13, "@0BFA");
WaitEventAutoScriptRun(10, false, false);
RoleSetDirFrame(2, 0, 0);
WaitEventAutoScriptRun(0, false, false);
RoleSetDirFrame(3, 0, 0);
WaitEventAutoScriptRun(10, false, false);
NpcSetDirFrame(0, 0);
WaitEventAutoScriptRun(3, false, false);
NpcSetDirFrame(1, 0);
WaitEventAutoScriptRun(3, false, false);
SetDlgUpper(55, 0, false);
//李大娘：
//别理那浑小子！
VideoUpdate(0, false);
SetDlgUpper(55, 0, false);
//李大娘：
//走．．到我房里来
//有什么委屈就说给大娘听
//大娘替你作主！
EventSetAutoScript(3, 13, "@0BFD");
WaitEventAutoScriptRun(0, false, false);
EventSetAutoScript(3, 25, "@0C00");
WaitEventAutoScriptRun(15, false, false);
RoleSetDirFrame(2, 0, 0);
WaitEventAutoScriptRun(6, false, false);
RoleSetDirFrame(1, 0, 0);
VideoFadeAndUpdate(-2);
FadeFbp(FbpWin.黑底屏, 0);
FadeIn(-1);
//"　次日．．"
FadeOut(0);
SetPaletteTime(0);
EventSetState(2, 7, 2);
EventSetState(2, 9, 1);
EventSetState(2, 6, 2);
RoleSetDirFrame(0, 0, 0);
PartySetPos(40, 16, 1);
SceneEnter(2);
MusicPlay(Music.余杭春日, true, false);

['@0BF8'];
NpcMoveToBlock(46, 92, 1, 3);

['@0BFA'];
NpcMoveToBlock(47, 92, 0, 3);
NpcMoveToBlock(50, 95, 0, 3);

['@0BFD'];
NpcMoveToBlock(43, 88, 0, 3);
EventSetState(-1, -1, 0);

['@0C00'];
NpcMoveToBlock(43, 88, 0, 3);
EventSetState(-1, -1, 0);

['@0C03'];
NpcMoveToBlockMutexLock(43, 46, 1, 2);
NpcSetDirFrame(3, 0);
EventSetState(2, 9, 0);
ReplaceAndPause();
NpcSetDirFrame(2, 0);

['@0C87'];
NpcMoveToBlock(33, 104, 1, 3);
ReplaceAndPause();
NpcSetDirFrame(3, 0);
ReplaceAndPause();
NpcSetDirFrame(2, 0);
ReplaceAndPause();
ReplaceAndPause();
NpcSetDirFrame(3, 0);

['@0C90'];
SetDlgUpper(39, 0, false);
//张四：
//这么个折腾下来，可真是累人
ReplaceAndPause();
//以后这种吃力不讨好的事可别
//再找我啦

['@0C97'];
EventSetTriggerMode(-1, -1, false, 2);
SetDlgUpper(87, 0, false);
//王小虎：
//哈～是仙女姐姐！
//我是小虎子，您还记得我吗？
SetDlgLower(14, 0, false);
//赵灵儿：
//嗯～我当然记得．．
//小虎～你爹爹的病好了吧？
VideoUpdate(0, false);
SetDlgLower(1, 0, false);
//李逍遥：
//咦～你们认识？
SetDlgUpper(87, 0, false);
//王小虎：
//　　对啊！
//我跟你说的仙女姐姐就是她
ReplaceAndPause();
SetDlgUpper(87, 0, false);
//王小虎：
//逍遥哥哥配仙女姐姐
//哈哈～天生一对！
ReplaceAndPause();
SetDlgUpper(0, 0, false);
//王小虎：
//你们要去哪？带我去好不好

['@0CB2'];
SetDlgUpper(52, 0, false);
//香兰：
//　啊．．你好

['@0CB6'];
SetDlgLower(52, 0, false);
//香兰：
//李家哥哥．．
//听说．．你要远行吗？
ReplaceAndPause();
//要记得我喔．．

['@0CBD'];
SetDlgLower(34, 0, false);
//秀兰：
//逍遥哥哥，那个女孩子是谁？
//怎么会住在你家？

['@0CC2'];
SetDlgLower(35, 0, false);
//秀兰：
//逍遥哥哥．．你不要走嘛～
//人家会想你呢．．

['@0CC7'];
EventSetTriggerMode(-1, -1, false, 1);
//王小虎：
//逍遥哥哥．．我要跟你去
ReplaceAndPause();
//呜～　逍遥哥哥都不理人家了
ReplaceAndPauseWithNop("@0CC7", 0);

['@0CCE'];
SetDlgUpper(34, 0, false);
//秀兰：
//逍遥哥哥～她是谁？
//怎么会跟你在一起．．
VideoUpdate(0, false);
SetDlgLower(10, 0, false);
//李逍遥：
//她．．她是我远房的表妹
//到我家来玩几天
SetDlgUpper(34, 0, false);
//秀兰：
//少骗人了，你家什么时候冒出
//个远房亲戚来？我怎么不知道
ReplaceAndPause();
//喂～！
//你可不许打逍遥哥的主意

['@0CDF'];
//旺财嫂：
//噢～这是那户人家的千金哪？
//外地来的吗？怎么都没见过？
ReplaceAndPause();
//为谁洗衣～为谁忙．．

['@0CE5'];
//来福婶：
//呵呵～小李子．．不简单哦！

['@0CE8'];
//鱼嫂：
//这几天出入仙灵岛的人
//怎么突然多了起来？

['@0CEC'];
JumpIfNotAllRolesFullHP("@0CF8");
//洪大夫：
//我说小李子呀～你老大不小了
//也该趁早讨个媳妇，安定下来
//别老是让你婶婶操心
VideoRestore();
//呵呵～我怎么说教起来了
//你们是来抓药的吧？
//自己随便挑吧．．
VideoUpdate(0, false);
ShowBuyItemMenu(1);

['@0CF8'];
//洪大夫：
//你们俩怎么受伤啦？
//听说你们打跑了一伙强盗
//呵～真是勇气可嘉！
RoleRevive(true, 10);
RoleModifyHPMP(true, 9999);
FadeOut(0);
VideoUpdate(0, false);
//洪大夫：
//以後有需要尽管来找我
//洪大叔最喜欢你们这样的年青人

['@0D37'];
//老王：
//呵．．听说你跑到仙灵岛上去
//求仙药，救了你婶婶一命是吧
ReplaceAndPause();
//好～真是孝顺的好孩子啊．．
ReplaceAndPauseWithNop("@0D37", 0);

['@0D3E'];
EventSetTriggerMode(-1, -1, false, 1);
SetDlgUpper(87, 0, false);
//王小虎：
//不好了～不好了，逍遥哥哥！
//有三个坏人拿着刀子，在村子
//里到处找你呢！他们看起来好
//凶喔．．
VideoUpdate(0, false);
SetDlgLower(9, 0, false);
//李逍遥：
//一定是那些死不成的家伙．．
//嘿～想找我报仇吗？他们现在
//人在哪里？
SetDlgUpper(87, 0, false);
//王小虎：
//他们找不到你，就在你家里等
VideoUpdate(0, false);
SetDlgLower(2, 0, false);
//李逍遥：
//啊．．我婶婶呢？
SetDlgUpper(87, 0, false);
//王小虎：
//李大娘出去买菜，还没回来。
VideoUpdate(0, false);
SetDlgUpper(35, 0, false);
//秀兰：
//李大哥．．你怎么会惹上那些
//苗人呢？我好怕会闹出人命呢
SetDlgLower(6, 0, false);
//李逍遥：
//哈哈．．我这是替天行道
//你不要担心，我现在武功高强
//没人打得过我的．．
ReplaceAndPause();
//逍遥哥哥加油！
ReplaceAndPause();
//打死那些坏蛋！

['@0D64'];
SetDlgUpper(35, 0, false);
//秀兰：
//李大哥，你千万不要回家呀！
//有三个苗人就在你家里等你呢
//他们说：如果你不出现，他们
//就要把你家给拆了
VideoUpdate(0, false);
SetDlgLower(10, 0, false);
//李逍遥：
//啥！这样我不回去怎行？
VideoUpdate(0, false);
SetDlgUpper(35, 0, false);
//秀兰：
//你看．．要不要报官啊
VideoUpdate(0, false);
SetDlgLower(9, 0, false);
//李逍遥：
//不必～有我就行了
//那些人不过是我的手下败将
SetDlgUpper(35, 0, false);
//秀兰：
//可是．．对方人多呢．．
//要打架总要准备些家伙吧
ReplaceAndPause();
SetDlgUpper(35, 0, false);
//秀兰：
//渔港边打铁的曾大伯和林木匠
//家里有卖一些兵器，我想你多
//少先准备一下嘛．．
SetDlgLower(1, 0, false);
//李逍遥：
//好啦～好啦，我知道．．
VideoUpdate(0, false);
SetDlgUpper(35, 0, false);
//秀兰：
//还有．．要不要先我替你去
//洪大夫家里买些伤药回来？
//万一．．万一．．
SetDlgLower(8, 0, false);
//李逍遥：
//啧．．你少触我霉头！
ReplaceAndPause();
SetDlgUpper(34, 0, false);
//秀兰：
//哼～人家担心你嘛．．

['@0D92'];
EventSetTriggerMode(-1, -1, false, 1);
//王小虎：
//逍遥哥哥好厉害喔！
ReplaceAndPause();
//逍遥哥哥你当我师父好不好？
ReplaceAndPauseWithNop("@0D92", 0);

SetDlgUpper(35, 0, false);
//秀兰：
//好可怕～你们会用法术．．

['@0D9D'];
//小李子，你终于想回来我的
//船上工作了吗！？
VideoUpdate(0, false);
SetDlgLower(1, 0, false);
//李逍遥：
//不．．方老板，我们兄妹俩
//要出远门，能否搭您的便船？
VideoUpdate(0, false);
SetDlgUpper(0, 0, false);
//方老板：
//啧．．好吧。
//不过．．我这艘船只到苏州
SetDlgLower(1, 0, false);
//李逍遥：
//也成！
FadeOut(0);
PartySetPos(39, 75, 0);
HeroSetSprite(0, 232, false);
RoleSetDirFrame(0, 0, 0);
PartySetRole(1, 0, 0);
EventSetTriggerMode(5, 12, true, 4);
EventSetState(-1, -1, 0);
VideoUpdate(0, false);

['@0DBD'];
//半夜三更的，菜市场早打烊了
RoleSetDirFrame(3, 0, 0);
WaitEventAutoScriptRun(0, false, false);
RoleSetDirFrame(0, 0, 0);
WaitEventAutoScriptRun(0, false, false);
RoleMoveOneStep(-8, 4, 0);
WaitEventAutoScriptRun(0, false, false);
RoleMoveOneStep(-8, 4, 0);
WaitEventAutoScriptRun(0, false, false);
RoleMoveOneStep(-8, 4, 0);
WaitEventAutoScriptRun(0, false, false);
RoleMoveOneStep(-8, 4, 0);
WaitEventAutoScriptRun(0, false, false);

['@0DCB'];
RoleMoveOneStep(-8, 4, 0);
WaitEventAutoScriptRun(0, false, false);
RoleMoveOneStep(-8, 4, 0);
WaitEventAutoScriptRun(0, false, false);
RoleMoveOneStep(-8, 4, 0);
WaitEventAutoScriptRun(0, false, false);
RoleMoveOneStep(-8, 4, 0);
WaitEventAutoScriptRun(0, false, false);
SetDlgLower(0, 0, false);
//李逍遥：
//哇～　哈～　我自由了！
RoleModifyHPMP(true, 9999);
ReplaceAndPause();

['@0E9E'];
VideoUpdate(0, false);
SetDlgLower(0, 0, false);
//李逍遥：
//喔．．我没带那么多钱呢
['@0EA2'];
ReplaceAndPause();
['Event_00006_00014_Trigger'];
//水果贩：
//来喔！这儿全都是今儿
//个刚摘下来的新鲜水果
//要不要来几个啊？
GotoWithSelect("@0EA2");
VideoUpdate(0, false);
SetDlgLower(0, 0, false);
//李逍遥：
//多少钱一斤？
SetDlgUpper(0, 0, false);
//水果贩：
//老顾客了，算你一斤２５文钱
CashModify(-25, "@0E9E");
AddItem(32, 0);
SetDlgBox(0);
//获得"水果"

['@0F0E'];
//学徒：
//做木匠是很辛苦的喔

['@0F55'];
VideoUpdate(0, false);
//未知对话
//未知对话
ReplaceAndPauseWithNop("Event_00010_00004_Trigger", 0);

['@0F81'];
NpcMoveToBlockMutexLock(50, 62, 0, 2);
EventSetState(-1, -1, 0);

['@1073'];
PartySetPos(18, 72, 0);
SceneEnter(19);
FadeOut(0);

['@1077'];
PartySetPos(57, 32, 0);
SceneEnter(19);
FadeOut(0);

['@10AB'];
SetDlgUpper(39, 0, false);
//未知对话
//未知对话
//未知对话
VideoUpdate(0, false);
SetDlgLower(3, 0, false);
//未知对话
//未知对话
//未知对话
SetDlgUpper(39, 0, false);
//未知对话
//未知对话
VideoUpdate(0, false);
SetDlgLower(6, 0, false);
//未知对话
//未知对话
//未知对话
//未知对话
EventSetTriggerScript(2, 3, "@0675");
EventSetTriggerScript(5, 13, "@0725");
EventSetTriggerScript(5, 9, "@05F2");
EventSetTriggerScript(5, 2, "");
EventSetTriggerMode(5, 2, false, -1);
EventSetState(2, 4, 0);
EventSetState(10, 1, 2);
EventSetState(2, 5, 0);
EventSetState(3, 16, 0);
EventSetState(1, 25, 0);
EventSetState(5, 10, 0);
EventSetState(5, 9, 2);
EventSetPos(5, 2, 1184, 1424);
EventSetPos(5, 9, 1152, 1376);
EventSetState(5, 3, 0);
PartySetPos(34, 84, 1);
SceneEnter(6);
FadeOut(0);
MusicPlay(Music.余杭春日, true, false);

['@10EA'];
NpcMoveToBlock(37, 7, 0, 3);

['@12AA'];
SetDlgUpper(15, 0, false);
//未知对话
ReplaceAndPause();
SetDlgUpper(11, 0, false);
//未知对话

['@1330'];
MusicPlay(Music.今生情不悔, true, false);
PartySetPos(44, 22, 0);
RoleSetDirFrame(3, 0, 0);
EventSetState(19, 17, 1);
EventSetStateSequence(19, 18, 19, 45, 2);
VideoUpdate(0, false);
SetDlgUpper(15, 0, false);
//未知对话
//未知对话
//未知对话
VideoRestore();
//未知对话
FadeOut(0);
PartySetPos(44, 23, 1);
PartySetRole(1, 2, 0);
RoleSetDirFrame(2, 0, 0);
RoleSetDirFrame(3, 0, 1);
EventSetState(19, 17, 0);
VideoUpdate(0, false);
SetDlgLower(1, 0, false);
//未知对话
//未知对话
SetDlgUpper(11, 0, false);
//未知对话
RoleSetDirFrame(1, 0, 0);
VideoUpdate(0, false);
SetDlgLower(9, 0, false);
//未知对话
//未知对话
//未知对话
//未知对话
VideoRestore();
//未知对话
//未知对话
//未知对话
ReplaceAndPause();

['@1355'];
EventWalkOneStep(-1, -1, 12, -6);
GotoWithNop("@1355", 0);

['@13B0'];
SetDlgUpper(39, 0, false);
//未知对话
//未知对话
//未知对话

['@13B5'];
SetDlgUpper(39, 0, false);
//未知对话
EventSetPos(5, 2, 1184, 1424);
EventSetPos(5, 9, 1152, 1376);
EventSetState(5, 9, 2);
EventSetTriggerMode(5, 2, false, -1);
EventSetTriggerScript(5, 2, "");
PartySetPos(34, 84, 1);
SceneEnter(6);
FadeOut(0);
MusicPlay(Music.晨光, true, false);

['@13D4'];
NpcSetFrame(3);
ReplaceAndPause();
NpcSetFrame(4);
ReplaceAndPause();
NpcSetFrame(5);
ReplaceAndPause();
NpcSetFrame(6);
ReplaceAndPause();
NpcSetFrame(7);
ReplaceAndPause();
NpcSetFrame(8);
ReplaceAndPause();
NpcSetFrame(9);
ReplaceAndPause();
NpcSetFrame(10);
ReplaceAndPause();
ReplaceAndPause();
ReplaceAndPause();
NpcSetFrame(11);

['@140C'];
PartySetRole(2, 1, 0);
SetBattleMusic(Music.势如破竹);
MusicPlay(Music.灵山, true, false);
ReplaceAndPause();

['@15D4'];
NpcSetFrame(4);
NpcSetFrame(5);
NpcSetFrame(6);
NpcSetFrame(7);
NpcSetFrame(8);
NpcSetFrame(9);
NpcSetFrame(10);

['@15DC'];
NpcMoveToBlock(36, 75, 0, 3);
NpcMoveToBlock(38, 73, 0, 8);
NpcMoveToBlock(41, 76, 0, 8);
NpcMoveToBlock(44, 73, 0, 8);
NpcMoveToBlock(47, 76, 0, 8);
NpcMoveToBlock(61, 62, 0, 8);
EventSetState(-1, -1, 0);

['@15F1'];
NpcMoveToBlock(36, 72, 1, 3);
WaitEventAutoScriptRun(2, false, false);
EventModifyPos(-1, -1, 4, -2);
NpcSetDirFrame(0, 0);

['@16B1'];
EventAnimate(0);
EventAnimate(0);
EventAnimate(0);
EventAnimate(0);
['@16B5'];
EventWalkOneStep(-1, -1, 8, 4);
GotoWithNop("@16B5", 0);

['@16BA'];
SetDlgLower(6, 0, false);
//未知对话
//未知对话
//未知对话
VideoUpdate(0, false);
SetDlgUpper(25, 0, false);
//未知对话
//未知对话
//未知对话
VideoUpdate(0, false);
SetDlgLower(1, 0, false);
//未知对话
//未知对话
//未知对话
VideoUpdate(0, false);
SetDlgUpper(23, 0, false);
//未知对话
//未知对话
//未知对话
SetDlgLower(1, 0, false);
//未知对话
//未知对话
EventSetTriggerScript(21, 11, "@1706");
ReplaceAndPause();
//未知对话

['@1706'];
EventSetTriggerScript(21, 10, "@173C");
EventSetTriggerMode(21, 10, true, 3);
EventSetDirFrame(21, 10, 0, 5);
SetDlgBox(0);
//未知对话
VideoUpdate(0, false);
SetDlgUpper(0, 0, false);
//未知对话
//未知对话
VideoUpdate(0, false);
RoleSetDirFrame(3, 0, 1);
VideoUpdate(0, false);
RoleSetDirFrame(0, 0, 1);
WaitEventAutoScriptRun(6, false, false);
RoleSetDirFrame(3, 0, 1);
VideoUpdate(0, false);
RoleSetDirFrame(2, 0, 1);
VideoUpdate(0, false);
SetDlgUpper(11, 0, false);
//未知对话
//未知对话
RoleSetDirFrame(3, 0, 0);
VideoUpdate(0, false);
RoleSetDirFrame(0, 0, 0);
VideoUpdate(0, false);
SetDlgLower(7, 0, false);
//未知对话
//未知对话
//未知对话
VideoUpdate(0, false);
Replace();
SetDlgUpper(11, 0, false);
//未知对话
//未知对话
//未知对话
//未知对话
SetDlgLower(8, 0, false);
//未知对话
//未知对话
//未知对话
VideoUpdate(0, false);
RoleSetDirFrame(0, 0, 0);
VideoUpdate(0, false);
RoleSetDirFrame(0, 0, 1);
VideoUpdate(0, false);
RoleMoveOneStep(-8, 4, 0);
VideoUpdate(0, false);
RoleMoveOneStep(-8, 4, 0);
VideoUpdate(0, false);
RoleMoveOneStep(-8, 4, 0);
VideoUpdate(0, false);
RoleMoveOneStep(-8, 4, 0);
VideoUpdate(0, false);

['@173C'];
//未知对话
EventSetState(21, 11, 0);
BattleStart(22, "@A073", "");
BattleEnd();
PartySetRole(1, 0, 0);
EventSetState(21, 10, 0);
EventSetState(21, 6, 1);
PartySetPos(27, 63, 0);
RoleSetDirFrame(3, 0, 0);
EventSetState(21, 4, 0);
EventSetState(21, 3, 1);
VideoUpdate(0, false);
SetDlgLower(11, 0, false);
//未知对话
//未知对话
//未知对话
VideoUpdate(0, false);
SetDlgUpper(2, 0, false);
//未知对话
//未知对话
//未知对话
//未知对话
WaitEventAutoScriptRun(2, false, false);
RoleMoveOneStep(8, 4, 0);
WaitEventAutoScriptRun(0, false, false);
RoleMoveOneStep(8, 4, 0);
WaitEventAutoScriptRun(0, false, false);
EventSetDirFrame(21, 3, 0, 0);
VideoUpdate(0, false);
SetDlgLower(23, 0, false);
//未知对话
//未知对话

['@1825'];
EventWalkOneStep(-1, -1, 3, -1);
EventWalkOneStep(-1, -1, 5, -3);
['@1827'];
EventWalkOneStep(-1, -1, 8, -4);
GotoWithNop("@1827", 0);

['@182A'];
SetDlgUpper(21, 0, false);
//未知对话
//未知对话
GotoWithNop("@A073", 0);

['@183B'];
SceneEnter(34);
PartySetPos(43, 54, 0);
FadeOut(0);

['@18CD'];
CashModify(-400, "@18C8");
//未知对话
//未知对话
VideoUpdate(0, false);
SetDlgLower(6, 0, false);
//未知对话
//未知对话
//未知对话
SetDlgUpper(11, 0, false);
//未知对话
VideoUpdate(0, false);
SetDlgLower(1, 0, false);
//未知对话
//未知对话
//未知对话
VideoUpdate(0, false);
SetDlgLower(1, 0, false);
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
AddItem(139, 0);
ReplaceAndPauseWithNop("@18C8", 0);

['@193A'];
SetDlgUpper(0, 0, false);
//未知对话
//未知对话
//未知对话

['@1A7D'];
EventSetState(26, 6, 1);
EventSetState(26, 7, 1);
EventSetState(26, 4, 1);
EventSetState(26, 5, 1);
PartySetPos(18, 25, 0);
HeroSetSprite(0, 236, false);
PartySetRole(1, 0, 0);
RoleSetDirFrame(0, 0, 0);
WaitEventAutoScriptRun(6, false, false);
SetDlgLower(40, 0, false);
//未知对话
//未知对话
VideoUpdate(0, false);
SetDlgUpper(1, 0, false);
//未知对话
//未知对话
//未知对话
//未知对话
VideoUpdate(0, false);
SetDlgLower(40, 0, false);
//未知对话
//未知对话
//未知对话
SetDlgUpper(1, 0, false);
//未知对话
//未知对话
VideoUpdate(0, false);
SetDlgLower(40, 0, false);
//未知对话
//未知对话
FadeOut(2);
EventSetState(26, 6, 0);
EventSetState(26, 8, 1);
SetPaletteTime(1);
VideoUpdate(0, false);
SetDlgCenter(0, false);
//未知对话
//未知对话
//未知对话
//未知对话
FadeOut(0);
HeroSetSprite(0, 2, true);
RoleSetDirFrame(3, 0, 0);
PartySetPos(18, 27, 1);
EventSetState(26, 7, 0);
EventSetState(26, 10, 2);
EventSetStateSequence(25, 5, 25, 14, 0);
EventSetTriggerScript(25, 4, "@193A");
EventSetTriggerScript(25, 9, "@1D9B");
EventSetTriggerScript(25, 10, "@1D9F");
EventSetState(23, 5, 0);
EventSetState(23, 7, 0);
EventSetState(23, 6, 2);
EventSetState(23, 8, 2);
EventSetState(23, 14, 0);
EventSetState(23, 9, 0);
EventSetState(23, 10, 0);
SetPaletteTime(0);
VideoUpdate(0, false);
SetDlgLower(40, 0, false);
//未知对话
//未知对话
SetDlgUpper(1, 0, false);
//未知对话
//未知对话
EventSetAutoScript(26, 10, "@1B1E");
WaitEventAutoScriptRun(4, false, false);
PartyWalkToBlock(20, 29, 0, 2);
WaitEventAutoScriptRun(0, false, false);
RoleSetDirFrame(0, 0, 0);
WaitEventAutoScriptRun(10, false, false);
SetDlgUpper(40, 0, false);
//未知对话
//未知对话
WaitEventAutoScriptRun(8, false, false);
EventSetPos(23, 3, 1168, 808);
EventSetDirFrame(23, 3, 0, 0);
EventSetTriggerScript(23, 3, "@1B2E");
EventSetAutoScript(23, 3, "");
SceneSetScript(24, "@1AD2", "");
EventSetTriggerScript(25, 15, "@1B31");
RoleModifyHPMP(true, 9999);
EventSetState(1, 0, 0);
ReplaceAndPause();

['@1AD2'];
MusicPlay(Music.风光, true, false);
VideoUpdate(0, false);
SetDlgUpper(0, 0, false);
//未知对话
//未知对话
//未知对话
WaitEventAutoScriptRun(4, false, false);
RoleSetDirFrame(2, 0, 0);
WaitEventAutoScriptRun(2, false, false);
RoleSetDirFrame(2, 0, 1);
VideoUpdate(0, false);
SetDlgLower(0, 0, false);
//未知对话
//未知对话
//未知对话
VideoUpdate(0, false);
SetDlgUpper(0, 0, false);
//未知对话
//未知对话
VideoUpdate(0, false);
SetDlgUpper(0, 0, false);
//未知对话
//未知对话
//未知对话
VideoUpdate(0, false);
SetDlgUpper(0, 0, false);
//未知对话
//未知对话
//未知对话
VideoUpdate(0, false);
SetDlgLower(0, 0, false);
//未知对话
//未知对话
VideoUpdate(0, false);
SetDlgUpper(0, 0, false);
//未知对话
//未知对话
SetDlgLower(11, 0, false);
//未知对话
WaitEventAutoScriptRun(6, false, false);
SetDlgUpper(0, 0, false);
//未知对话
//未知对话
VideoRestore();
//未知对话
//未知对话
//未知对话
VideoRestore();
//未知对话
//未知对话
VideoUpdate(0, false);
SetDlgLower(0, 0, false);
//未知对话
//未知对话
//未知对话
RoleSetDirFrame(3, 0, 0);
VideoUpdate(0, false);
RoleMoveOneStep(8, 4, 0);
VideoUpdate(0, false);
RoleMoveOneStep(8, 4, 0);
VideoUpdate(0, false);
SetDlgUpper(0, 0, false);
//未知对话
//未知对话
RoleSetDirFrame(2, 0, 0);
VideoUpdate(0, false);
SetDlgLower(0, 0, false);
//未知对话
//未知对话
EventSetAutoScript(23, 3, "@1B7F");
SetDlgUpper(0, 0, false);
//未知对话
//未知对话
RoleSetDirFrame(3, 0, 0);
ReplaceAndPause();

['@1B1E'];
NpcMoveToBlockMutexLock(18, 30, 1, 2);
ReplaceAndPause();
NpcSetDirFrame(3, 0);
NpcSetDirFrame(2, 0);
ReplaceAndPause();
ReplaceAndPause();
NpcSetDirFrame(3, 0);
NpcSetDirFrame(0, 0);
NpcMoveToBlockMutexLock(18, 31, 0, 2);
EventSetState(-1, -1, 0);

['@1B2E'];
//未知对话
//未知对话

['@1B31'];
SetDlgCenter(0, false);
//未知对话
//未知对话
RoleMoveOneStep(-16, -8, 0);
WaitEventAutoScriptRun(0, false, false);
RoleMoveOneStep(-16, -8, 0);
WaitEventAutoScriptRun(0, false, false);

['@1BA2'];
ReplaceAndPause();
GotoWithProbability(4, "@1BA2");
NpcMoveToBlockMutexLock(37, 53, 0, 2);
NpcMoveToBlockMutexLock(33, 49, 1, 2);
NpcMoveToBlockMutexLock(33, 50, 0, 2);
NpcMoveToBlockMutexLock(35, 52, 0, 2);
ReplaceAndPause();
ReplaceAndPause();
['@1BAA'];
ReplaceAndPause();
GotoWithProbability(3, "@1BAA");
NpcMoveToBlockMutexLock(37, 54, 0, 2);
NpcMoveToBlockMutexLock(39, 51, 1, 2);
NpcMoveToBlockMutexLock(41, 53, 1, 2);
WaitEventAutoScriptRun(9, false, false);
NpcMoveToBlockMutexLock(47, 48, 0, 2);
NpcMoveToBlockMutexLock(44, 45, 0, 2);
NpcMoveToBlockMutexLock(41, 42, 0, 2);
WaitEventAutoScriptRun(3, false, false);
NpcMoveToBlockMutexLock(41, 41, 1, 2);
WaitEventAutoScriptRun(4, false, false);
NpcMoveToBlockMutexLock(44, 44, 1, 2);
WaitEventAutoScriptRun(7, false, false);
NpcMoveToBlockMutexLock(33, 56, 0, 2);
WaitEventAutoScriptRun(2, false, false);
NpcMoveToBlockMutexLock(33, 56, 1, 2);
ReplaceAndPauseWithNop("@1BA2", 0);

['@1D2A'];
//未知对话
//未知对话

['@1D2D'];
VideoUpdate(0, false);
SetDlgLower(1, 0, false);
//未知对话
//未知对话
//未知对话
//未知对话
ReplaceAndPauseWithNop("@1D2A", 0);

['@1D35'];
SetDlgLower(1, 0, false);
//未知对话
//未知对话
//未知对话

['@1D44'];
NpcMoveToBlock(24, 40, 0, 8);
NpcMoveToBlock(22, 38, 1, 8);
NpcMoveToBlock(20, 40, 1, 8);
EventSetState(-1, -1, 0);

['@1D4E'];
//未知对话
//未知对话
//未知对话
//未知对话

['@1D75'];
NpcMoveToBlock(15, 27, 0, 3);
NpcMoveToBlock(17, 29, 1, 3);
NpcMoveToBlock(20, 26, 1, 3);
NpcMoveToBlock(19, 28, 0, 3);
NpcSetDirFrame(1, 0);
WaitEventAutoScriptRun(3, false, false);
NpcMoveToBlock(20, 26, 1, 3);
NpcMoveToBlock(18, 24, 0, 3);
NpcMoveToBlock(13, 29, 0, 3);
NpcMoveToBlock(12, 28, 1, 3);
NpcMoveToBlock(11, 30, 0, 3);
EventSetState(-1, -1, 0);

['@1D82'];
NpcMoveToBlock(18, 28, 1, 3);
NpcMoveToBlock(20, 26, 1, 3);
NpcMoveToBlock(18, 24, 1, 3);
NpcMoveToBlock(16, 26, 1, 3);
WaitEventAutoScriptRun(4, false, false);
NpcMoveToBlock(17, 27, 1, 3);
WaitEventAutoScriptRun(6, false, false);
NpcMoveToBlock(15, 30, 0, 8);
NpcMoveToBlock(13, 28, 0, 8);
NpcMoveToBlock(10, 30, 1, 8);
EventSetState(-1, -1, 0);

['@1D8E'];
ReplaceAndPause();
['Event_00024_00015_Trigger'];
//未知对话
GotoWithSelect("@1D8E");
CashModify(-20, "@1D95");
AddItem(20, 0);
ReplaceAndPauseWithNop("Event_00024_00015_Trigger", 0);

['@1D95'];
VideoUpdate(0, false);
//未知对话
//未知对话
//未知对话
ReplaceAndPauseWithNop("Event_00024_00015_Trigger", 0);

['@1D9B'];
//未知对话
//未知对话
//未知对话

['@1D9F'];
//未知对话
//未知对话

['@1DFD'];
SceneEnter(38);
PartySetPos(34, 31, 0);
FadeOut(0);

['@1FB7'];
EventAnimate(0);
ReplaceAndPauseWithNop("@1FB7", 0);

['@1FBA'];
EventAnimate(0);
ReplaceAndPauseWithNop("@1FBA", 0);

['@1FBD'];
EventAnimate(0);
GotoWithNop("@1FBD", 0);

['@1FEE'];
EventSetAutoScript(32, 5, "@1FF7");
ReplaceAndPause();
EventModifyPos(-1, -1, 2, 1);
NpcSetFrame(8);
WaitEventAutoScriptRun(3, false, false);
NpcSetFrame(0);
EventModifyPos(-1, -1, -2, -1);
ReplaceAndPauseWithNop("Event_00033_00003_Auto", 0);

['@1FF7'];
EventModifyPos(-1, -1, 10, 7);
NpcSetFrame(0);
EventModifyPos(-1, -1, 2, 1);
ReplaceAndPause();
NpcSetFrame(1);
EventModifyPos(-1, -1, -16, -12);
EventModifyPos(-1, -1, 4, 4);
PlaySound(17);

['@2000'];
NpcSetFrame(0);
EventModifyPos(-1, -1, 0, -8);
ReplaceAndPause();
EventModifyPos(-1, -1, 8, 4);
NpcSetFrame(2);
PlaySound(17);
NpcSetFrame(1);
EventModifyPos(-1, -1, -8, 4);
PlaySound(15);

['@200A'];
EventModifyPos(-1, -1, -8, -4);
ReplaceAndPause();
ReplaceAndPause();
PlaySound(7);
NpcSetFrame(3);
EventModifyPos(-1, -1, 6, 3);
EventModifyPos(-1, -1, 2, 1);
ReplaceAndPause();
NpcSetFrame(0);

['@2108'];
NpcMoveToBlockMutexLock(42, 84, 1, 4);
EventSetState(-1, -1, 0);

['@21D0'];
EventSetTriggerMode(-1, -1, false, 1);
SceneSetScript(37, "Scene_00034_Enter", "");
SceneSetScript(38, "Scene_00034_Enter", "");
EventSetAutoScript(36, 5, "");
EventSetAutoScript(36, 6, "");
EventSetAutoScript(36, 7, "");
EventSetDirFrame(36, 5, 0, 0);
EventSetDirFrame(36, 6, 0, 0);
EventSetDirFrame(36, 7, 0, 0);
EventSetState(36, 2, 0);
EventSetState(36, 3, 2);
EventSetState(36, 4, 0);
EventSetState(35, 9, 0);
EventSetState(35, 10, 0);
EventSetState(35, 11, 0);
EventSetState(35, 12, 0);
EventSetState(35, 13, 0);
EventSetState(35, 15, 2);
EventSetState(35, 16, 2);
EventSetState(35, 17, 2);
EventSetState(36, 0, 2);
SetDlgUpper(64, 0, false);
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
VideoUpdate(0, false);
SetDlgLower(0, 0, false);
//未知对话
//未知对话
VideoRestore();
//未知对话
//未知对话
VideoRestore();
//未知对话
//未知对话
NpcSetDirFrame(3, 0);
VideoUpdate(0, false);
SetDlgUpper(0, 0, false);
//未知对话
//未知对话
NpcSetDirFrame(0, 0);
VideoUpdate(0, false);
SetDlgUpper(0, 0, false);
//未知对话
//未知对话
VideoUpdate(0, false);
SetDlgLower(0, 0, false);
//未知对话
//未知对话
FadeOut(0);
EventSetState(34, 5, 0);
EventSetDirFrame(1, 0, 3, 0);
EventSetTriggerMode(1, 0, false, -1);
RoleSetDirFrame(2, 0, 0);
NpcSetDirFrame(0, 0);
VideoUpdate(0, false);
SetDlgUpper(64, 0, false);
//未知对话
//未知对话
//未知对话
VideoUpdate(0, false);
SetDlgUpper(64, 0, false);
//未知对话
//未知对话
//未知对话
//未知对话
VideoUpdate(0, false);
MusicStop(0);
EventSetState(35, 0, 2);
SetDlgUpper(0, 0, false);
//未知对话
//未知对话
WaitEventAutoScriptRun(6, false, false);
RoleSetDirFrame(0, 0, 0);
WaitEventAutoScriptRun(10, false, false);
SetDlgLower(64, 0, false);
//未知对话
//未知对话
VideoUpdate(0, false);
SetDlgUpper(0, 0, false);
//未知对话
//未知对话
//未知对话
VideoUpdate(0, false);
SetDlgLower(64, 0, false);
//未知对话
//未知对话
//未知对话
EventSetDirFrame(34, 6, 2, 0);
VideoUpdate(0, false);
SetDlgUpper(0, 0, false);
//未知对话
//未知对话
EventSetAutoScript(34, 6, "@2343");
MusicPlay(Music.危机, true, false);
ReplaceAndPause();
//未知对话
//未知对话

['@2299'];
PartySetPos(33, 43, 0);
PartySetRole(1, 0, 0);
RoleSetDirFrame(0, 0, 0);
EventSetAutoScript(37, 6, "@232D");
WaitEventAutoScriptRun(16, false, false);
EventSetState(37, 7, 2);
TogglePaletteTime(true);
WaitEventAutoScriptRun(6, false, false);
SetDlgLower(0, 0, false);
//未知对话
//未知对话
//未知对话
EventSetDirFrame(37, 6, 2, 0);
VideoUpdate(0, false);
SetDlgUpper(23, 0, false);
//未知对话
//未知对话
//未知对话
//未知对话
EventSetState(37, 8, 2);
EventSetState(38, 0, 2);
WaitEventAutoScriptRun(16, false, false);
SetDlgUpper(64, 0, false);
//未知对话
//未知对话
SetDlgLower(22, 0, false);
//未知对话
//未知对话
EventSetAutoScript(37, 7, "@2386");
WaitEventAutoScriptRun(24, false, false);
RoleSetDirFrame(3, 0, 0);
WaitEventAutoScriptRun(11, false, false);
SetDlgUpper(64, 0, false);
//未知对话
//未知对话
//未知对话
EventSetAutoScript(37, 8, "@238C");
WaitEventAutoScriptRun(10, false, false);
SetDlgLower(23, 0, false);
//未知对话
//未知对话
//未知对话
VideoUpdate(0, false);
SetDlgUpper(0, 0, false);
//未知对话
//未知对话
//未知对话
//未知对话
RoleSetDirFrame(2, 0, 0);
VideoUpdate(0, false);
SetDlgLower(5, 0, false);
//未知对话
//未知对话
VideoUpdate(0, false);
SetDlgUpper(0, 0, false);
//未知对话
//未知对话
SetDlgLower(5, 0, false);
//未知对话
//未知对话
VideoUpdate(0, false);
SetDlgLower(23, 0, false);
//未知对话
//未知对话
//未知对话
VideoUpdate(0, false);
SetDlgUpper(0, 0, false);
//未知对话
//未知对话
//未知对话
//未知对话
//未知对话
VideoUpdate(0, false);
SetDlgLower(5, 0, false);
//未知对话
//未知对话
RoleSetDirFrame(3, 0, 0);
VideoUpdate(0, false);
RoleSetDirFrame(0, 0, 0);
VideoUpdate(0, false);
SetDlgLower(5, 0, false);
//未知对话
//未知对话
//未知对话
VideoUpdate(0, false);
EventSetDirFrame(37, 6, 1, 0);
RoleMoveOneStep(-16, 8, 0);
ViewportMove(16, -8, 0);
EventSetDirFrame(37, 6, 0, 0);
RoleMoveOneStep(-16, 8, 0);
ViewportMove(16, -8, 0);
RoleMoveOneStep(-16, 8, 0);
ViewportMove(16, -8, 0);
RoleMoveOneStep(-16, 8, 0);
ViewportMove(16, -8, 0);
RoleMoveOneStep(-16, 8, 0);
ViewportMove(16, -8, 0);
RoleMoveOneStep(-16, 8, 0);
ViewportMove(16, -8, 0);
RoleMoveOneStep(-16, 8, 0);
ViewportMove(16, -8, 0);
RoleMoveOneStep(-16, 8, 0);
ViewportMove(16, -8, 0);
HeroSetSprite(0, 232, true);
WaitEventAutoScriptRun(6, false, false);
EventSetDirFrame(37, 6, 2, 0);
VideoUpdate(0, false);
SetDlgLower(23, 0, false);
//未知对话
//未知对话
//未知对话
//未知对话
SetDlgUpper(0, 0, false);
//未知对话
//未知对话
//未知对话
EventSetDirFrame(37, 8, 0, 0);
VideoUpdate(0, false);
SetDlgUpper(64, 0, false);
//未知对话
//未知对话
//未知对话
//未知对话
//未知对话
//未知对话
//未知对话
SetDlgLower(22, 0, false);
//未知对话
//未知对话
//未知对话
//未知对话
EventSetAutoScript(37, 6, "@2339");
WaitEventAutoScriptRun(18, false, false);
EventSetState(37, 6, 0);
SetDlgUpper(64, 0, false);
//未知对话
//未知对话
FadeOut(0);
EventSetState(37, 7, 0);
EventSetState(37, 8, 0);
EventSetState(38, 0, 0);
HeroSetSprite(0, 2, true);
SceneEnter(40);
PartySetPos(50, 61, 1);
ViewportMove(0, 0, -1);
ReplaceAndPause();
SetPaletteTime(0);

['@232D'];
NpcMoveToBlockMutexLock(34, 43, 1, 2);
NpcSetDirFrame(3, 0);
NpcSetFrame(12);
WaitEventAutoScriptRun(3, false, false);
EventSetAutoScript(37, 3, "Event_00021_00024_Auto");
WaitEventAutoScriptRun(12, false, false);
NpcSetDirFrame(3, 0);
WaitEventAutoScriptRun(3, false, false);
NpcMoveToBlockMutexLock(34, 43, 0, 2);
NpcMoveToBlockMutexLock(33, 43, 1, 2);
NpcSetDirFrame(1, 0);

['@2339'];
EventAnimate(0);
EventWalkOneStep(-1, -1, -12, 6);
EventWalkOneStep(-1, -1, -16, 0);
EventWalkOneStep(-1, -1, -16, 0);
['@233D'];
EventWalkOneStep(-1, -1, -16, 8);
GotoWithNop("@233D", 0);

['@2343'];
NpcMoveToBlock(31, 81, 1, 3);
NpcMoveToBlock(21, 71, 1, 3);
EventSetState(-1, -1, 0);

['@2347'];
NpcSetDirFrame(1, 0);
['@2348'];
EventWalkOneStep(-1, -1, -8, -4);
GotoWithNop("@2348", 0);

['@2386'];
NpcMoveToBlock(33, 41, 0, 3);
NpcSetDirFrame(2, 0);
NpcSetDirFrame(3, 0);

['@238C'];
NpcMoveToBlockMutexLock(34, 42, 0, 2);

['@23A4'];
//未知对话
//未知对话
//未知对话
ReplaceAndPause();
//未知对话
//未知对话

['@2590'];
NpcMoveToBlock(26, 77, 1, 3);
NpcMoveToBlock(13, 64, 1, 3);
NpcMoveToBlock(25, 52, 1, 3);
NpcMoveToBlock(21, 48, 0, 3);
NpcMoveToBlock(19, 49, 1, 3);
NpcSetDirFrame(3, 0);
EventSetTriggerMode(-1, -1, false, 1);

['@2598'];
NpcMoveToBlock(25, 68, 0, 3);
NpcMoveToBlock(26, 66, 1, 3);
NpcMoveToBlock(23, 63, 1, 3);
NpcSetDirFrame(3, 0);
EventSetTriggerMode(-1, -1, true, 2);

['@259E'];
NpcMoveToBlock(24, 63, 0, 3);
NpcMoveToBlock(26, 65, 1, 3);
NpcMoveToBlock(26, 66, 0, 3);
NpcMoveToBlock(28, 68, 1, 3);
NpcMoveToBlock(27, 70, 0, 3);
NpcMoveToBlock(30, 73, 1, 3);
NpcMoveToBlock(26, 78, 0, 3);
NpcMoveToBlock(14, 66, 0, 3);
NpcMoveToBlock(27, 52, 1, 3);
NpcMoveToBlock(25, 50, 1, 3);
NpcMoveToBlock(24, 51, 1, 3);
NpcMoveToBlock(23, 50, 0, 3);
NpcMoveToBlock(18, 54, 1, 3);
NpcSetDirFrame(2, 0);
EventSetTriggerMode(-1, -1, false, 1);

['@25AE'];
NpcMoveToBlock(26, 52, 1, 3);
NpcMoveToBlock(23, 49, 1, 3);
NpcMoveToBlock(22, 50, 1, 3);
NpcMoveToBlock(21, 49, 0, 3);
NpcSetDirFrame(2, 0);
EventSetTriggerMode(-1, -1, false, 1);

['@25B5'];
NpcMoveToBlock(24, 50, 0, 3);
NpcMoveToBlock(23, 50, 1, 3);
NpcMoveToBlock(22, 49, 1, 3);
NpcSetDirFrame(3, 0);
EventSetTriggerMode(-1, -1, false, 1);

['@25BE'];
EventSetTriggerMode(-1, -1, false, -1);
EventSetState(-1, -1, 1);
PlaySound(155);
NpcSetFrame(1);
WaitEventAutoScriptRun(2, false, false);
NpcSetFrame(2);
WaitEventAutoScriptRun(2, false, false);
NpcSetFrame(3);

['@25E4'];
SceneEnter(58);
PartySetPos(46, 114, 0);
FadeOut(0);

['@2659'];
NpcMoveToBlock(27, 90, 0, 3);
NpcMoveToBlock(25, 88, 1, 3);
NpcMoveToBlock(26, 88, 0, 3);
NpcMoveToBlock(24, 86, 1, 3);
EventSetState(-1, -1, 0);

['@2661'];
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
SetDlgUpper(0, 0, false);
//未知对话
//未知对话
EventSetState(51, 8, 0);
VideoUpdate(0, false);
AddItem(224, 0);
Replace();
//未知对话
//未知对话

['@2675'];
SetDlgLower(0, 0, false);
//未知对话
//未知对话
RemoveItem(224, 0, "");
ReplaceAndPause();
//未知对话
//未知对话
//未知对话

['@26DF'];
FadeOut(0);
HeroSetSprite(0, 259, false);
PartySetRole(1, 0, 0);
RoleSetDirFrame(0, 0, 0);
PartySetPos(7, 91, 0);
WaitEventAutoScriptRun(8, false, false);
RoleSetDirFrame(0, 1, 0);
WaitEventAutoScriptRun(2, false, false);
RoleSetDirFrame(0, 2, 0);
WaitEventAutoScriptRun(2, false, false);
RoleSetDirFrame(0, 3, 0);
WaitEventAutoScriptRun(2, false, false);
RoleSetDirFrame(0, 4, 0);
WaitEventAutoScriptRun(2, false, false);
RoleSetDirFrame(0, 5, 0);
WaitEventAutoScriptRun(2, false, false);
RoleSetDirFrame(0, 4, 0);
WaitEventAutoScriptRun(2, false, false);
RoleSetDirFrame(0, 5, 0);
WaitEventAutoScriptRun(2, false, false);
RoleSetDirFrame(0, 6, 0);
WaitEventAutoScriptRun(5, false, false);
RoleSetDirFrame(0, 7, 0);
WaitEventAutoScriptRun(2, false, false);
RoleSetDirFrame(0, 8, 0);
WaitEventAutoScriptRun(2, false, false);
RoleSetDirFrame(0, 9, 0);
WaitEventAutoScriptRun(2, false, false);
RoleSetDirFrame(0, 10, 0);
WaitEventAutoScriptRun(2, false, false);
RoleSetDirFrame(0, 11, 0);
WaitEventAutoScriptRun(2, false, false);
RoleSetDirFrame(0, 12, 0);
WaitEventAutoScriptRun(2, false, false);
RoleSetDirFrame(0, 13, 0);
WaitEventAutoScriptRun(2, false, false);
RoleSetDirFrame(0, 14, 0);
WaitEventAutoScriptRun(2, false, false);
RoleSetDirFrame(0, 15, 0);
WaitEventAutoScriptRun(2, false, false);
RoleSetDirFrame(0, 16, 0);
WaitEventAutoScriptRun(40, false, false);
EventSetState(49, 20, 0);
RoleSetDirFrame(0, 17, 0);
WaitEventAutoScriptRun(2, false, false);
RoleSetDirFrame(0, 18, 0);
WaitEventAutoScriptRun(2, false, false);
RoleSetDirFrame(0, 17, 0);
WaitEventAutoScriptRun(10, false, false);
RoleSetDirFrame(0, 18, 0);
WaitEventAutoScriptRun(2, false, false);
RoleSetDirFrame(0, 17, 0);
WaitEventAutoScriptRun(6, false, false);
RoleSetDirFrame(0, 18, 0);
WaitEventAutoScriptRun(2, false, false);
RoleSetDirFrame(0, 19, 0);
WaitEventAutoScriptRun(2, false, false);
RoleSetDirFrame(0, 20, 0);
WaitEventAutoScriptRun(2, false, false);
RoleSetDirFrame(0, 21, 0);
WaitEventAutoScriptRun(2, false, false);
RoleSetDirFrame(0, 22, 0);
WaitEventAutoScriptRun(2, false, false);
RoleSetDirFrame(0, 23, 0);
WaitEventAutoScriptRun(2, false, false);
RoleSetDirFrame(0, 24, 0);
WaitEventAutoScriptRun(2, false, false);
RoleSetDirFrame(0, 25, 0);
WaitEventAutoScriptRun(2, false, false);
RoleSetDirFrame(0, 26, 0);
WaitEventAutoScriptRun(0, false, false);
SetDlgBox(0);
//未知对话
FadeOut(0);
AddItem(222, 0);
EventSetTriggerScript(51, 7, "@2675");
HeroSetSprite(0, 2, true);
RoleSetDirFrame(0, 0, 0);
EventSetState(-1, -1, 0);
PartySetPos(8, 87, 1);

['@27AC'];
NpcMoveToBlockMutexLock(46, 39, 0, 2);
NpcMoveToBlockMutexLock(38, 46, 1, 2);
NpcMoveToBlockMutexLock(34, 42, 1, 2);
ReplaceAndPauseWithNop("Event_00002_00020_Auto", 0);

['@2805'];
EventSetState(48, 9, 2);
EventSetState(48, 10, 2);
EventSetTriggerScript(51, 7, "@2661");
SetDlgUpper(0, 0, false);
//未知对话
//未知对话
//未知对话
//未知对话
SetDlgLower(0, 0, false);
//未知对话
//未知对话
VideoUpdate(0, false);
SetDlgUpper(0, 0, false);
//未知对话
//未知对话
//未知对话
VideoUpdate(0, false);
SetDlgUpper(21, 0, false);
//未知对话
//未知对话
//未知对话
//未知对话
VideoUpdate(0, false);
SetDlgLower(1, 0, false);
//未知对话
//未知对话
SetDlgUpper(21, 0, false);
//未知对话
//未知对话
FadeOut(0);
HeroSetSprite(0, 232, false);
PartySetRole(1, 0, 0);
RoleSetDirFrame(0, 0, 0);
SceneSetScript(54, "@29A3", "");
SceneEnter(54);
ReplaceAndPause();
['@2829'];
SetDlgUpper(0, 0, false);
//未知对话
//未知对话
//未知对话
VideoUpdate(0, false);
JumpIfItemCountLessThan(221, 1, "@2853");
JumpIfItemCountLessThan(223, 1, "@2858");
JumpIfItemCountLessThan(222, 1, "@2858");
//未知对话
//未知对话
FadeOut(0);
WaitEventAutoScriptRun(0, false, false);
RemoveItem(221, 0, "");
RemoveItem(223, 0, "");
RemoveItem(222, 0, "");
AddItem(226, 0);
//未知对话
//未知对话
EventSetAutoScript(53, 3, "Event_00002_00020_Auto");
EventSetAutoScript(53, 6, "");
EventSetDirFrame(53, 6, 1, 0);
EventSetTriggerScript(53, 3, "@298B");
EventSetTriggerScript(53, 6, "@298F");
EventSetPos(53, 3, 1392, 584);
EventSetPos(53, 6, 1456, 616);
EventSetState(52, 4, 0);
PartySetRole(1, 3, 0);
ReplaceAndPause();
//未知对话
//未知对话
//未知对话
//未知对话
//未知对话
VideoUpdate(0, false);
Replace();
//未知对话
//未知对话
//未知对话
//未知对话
VideoUpdate(0, false);
ShowBuyItemMenu(8);

['@2853'];
//未知对话
//未知对话
//未知对话
ReplaceAndPauseWithNop("@2829", 0);

['@2858'];
//未知对话
//未知对话
//未知对话
ReplaceAndPauseWithNop("@2829", 0);

['@2889'];
NpcMoveToBlock(17, 55, 0, 8);
NpcMoveToBlock(18, 54, 0, 3);
NpcSetDirFrame(3, 0);
EventSetTriggerMode(-1, -1, true, 3);

['@288E'];
NpcMoveToBlock(8, 43, 0, 8);
NpcMoveToBlock(15, 36, 0, 8);
NpcMoveToBlock(20, 40, 1, 8);
NpcMoveToBlock(29, 31, 1, 8);
EventSetTriggerMode(-1, -1, true, 4);

['@2894'];
NpcMoveToBlock(28, 30, 1, 3);
NpcMoveToBlock(31, 27, 1, 8);
NpcMoveToBlock(38, 34, 0, 8);
EventSetTriggerMode(-1, -1, true, 4);

['@2899'];
NpcMoveToBlock(37, 34, 1, 3);
NpcMoveToBlock(34, 31, 1, 8);
NpcMoveToBlock(36, 30, 0, 8);
NpcMoveToBlock(34, 28, 0, 8);
NpcMoveToBlock(35, 26, 1, 8);
NpcMoveToBlock(34, 25, 0, 8);
EventSetTriggerMode(-1, -1, true, 4);

['@28A1'];
NpcMoveToBlock(39, 20, 0, 8);
NpcMoveToBlock(42, 23, 0, 8);
NpcMoveToBlock(43, 21, 1, 8);
NpcMoveToBlock(42, 20, 0, 8);
NpcMoveToBlock(40, 22, 0, 8);
NpcMoveToBlock(38, 20, 0, 8);
EventSetTriggerMode(-1, -1, true, 3);

['@28A9'];
NpcMoveToBlock(24, 33, 1, 8);
NpcMoveToBlock(26, 35, 0, 8);
NpcMoveToBlock(24, 36, 1, 8);
NpcMoveToBlock(29, 41, 1, 8);
NpcMoveToBlock(36, 34, 1, 8);
NpcMoveToBlock(37, 35, 0, 3);
EventSetTriggerMode(-1, -1, true, 4);

['@28BB'];
EventSetAutoScript(48, 8, "");
EventSetTriggerScript(48, 8, "@28C1");
EventSetTriggerMode(48, 8, false, 0);
EventSetDirFrame(48, 8, 0, 16);
PlaySound(14);

['@28C1'];
SetDlgLower(0, 0, false);
//未知对话
//未知对话
//未知对话
//未知对话
AddItem(223, 0);
FadeOut(0);
EventSetDirFrame(48, 8, 1, 0);
EventSetAutoScript(48, 8, "@28D0");
WaitEventAutoScriptRun(12, false, false);
EventSetState(48, 8, 0);
SetDlgBox(0);
//未知对话
EventSetState(52, 4, 2);

['@28D0'];
EventWalkOneStep(-1, -1, -8, -4);
EventWalkOneStep(-1, -1, -11, -5);
EventWalkOneStep(-1, -1, -13, -7);
['@28D3'];
EventWalkOneStep(-1, -1, -16, -8);
GotoWithNop("@28D3", 0);

['@28D9'];
VideoUpdate(0, false);
SetDlgBox(0);
//未知对话
MusicStop(1);
FadeOut(3);
MusicPlay(Music.白河寒秋, true, false);
SceneSetScript(50, "@2B66", "");
NpcSetDirFrame(0, 1);
VideoUpdate(3, false);
SetDlgUpper(19, 0, false);
//未知对话
//未知对话
VideoUpdate(0, false);
SetDlgLower(3, 0, false);
//未知对话
//未知对话
//未知对话
VideoUpdate(0, false);
SetDlgUpper(65, 0, false);
//未知对话
//未知对话
//未知对话
EventSetState(-1, -1, 0);
PartySetPos(44, 37, 1);
PartySetRole(1, 2, 3);
RoleSetDirFrame(1, 0, 1);
RoleSetDirFrame(0, 0, 0);
EventSetDirFrame(53, 3, 3, 0);
EventSetAutoScript(53, 3, "");
EventSetDirFrame(53, 6, 1, 0);
FadeOut(0);
WaitEventAutoScriptRun(0, false, false);
SetDlgLower(11, 0, false);
//未知对话
//未知对话
//未知对话
VideoUpdate(0, false);
SetDlgUpper(65, 0, false);
//未知对话
//未知对话
//未知对话
//未知对话
//未知对话
//未知对话
SetDlgLower(11, 0, false);
//未知对话
//未知对话
//未知对话
//未知对话
VideoUpdate(0, false);
SetDlgUpper(65, 0, false);
//未知对话
//未知对话
RoleSetDirFrame(1, 0, 0);
VideoUpdate(0, false);
SetDlgLower(1, 0, false);
//未知对话
//未知对话
//未知对话
//未知对话
//未知对话
VideoUpdate(0, false);
SetDlgUpper(65, 0, false);
//未知对话
//未知对话
//未知对话
//未知对话
//未知对话
//未知对话
//未知对话
//未知对话
//未知对话
SetDlgLower(1, 0, false);
//未知对话
//未知对话
//未知对话
//未知对话
//未知对话
VideoUpdate(0, false);
SetDlgLower(50, 0, false);
//未知对话
//未知对话
RoleSetDirFrame(3, 0, 0);
WaitEventAutoScriptRun(2, false, false);
RoleSetDirFrame(3, 0, 1);
VideoUpdate(0, false);
SetDlgUpper(1, 0, false);
//未知对话
//未知对话
VideoUpdate(0, false);
SetDlgLower(50, 0, false);
//未知对话
//未知对话
//未知对话
//未知对话
//未知对话
//未知对话
//未知对话
RoleSetDirFrame(0, 0, 0);
VideoUpdate(0, false);
SetDlgUpper(3, 0, false);
//未知对话
//未知对话
//未知对话
VideoUpdate(0, false);
SetDlgLower(51, 0, false);
//未知对话
//未知对话
//未知对话
SetDlgUpper(65, 0, false);
//未知对话
//未知对话
RoleSetDirFrame(1, 0, 0);
EventSetDirFrame(53, 6, 2, 0);
VideoUpdate(0, false);
RoleSetDirFrame(2, 0, 1);
EventSetDirFrame(53, 6, 3, 0);
VideoUpdate(0, false);
SetDlgUpper(65, 0, false);
//未知对话
//未知对话
//未知对话
//未知对话
//未知对话
SetDlgLower(1, 0, false);
//未知对话
//未知对话
//未知对话
VideoUpdate(0, false);
SetDlgUpper(65, 0, false);
//未知对话
//未知对话
WaitEventAutoScriptRun(2, false, false);
RoleSetDirFrame(3, 0, 0);
WaitEventAutoScriptRun(4, false, false);
RoleSetDirFrame(0, 0, 0);
WaitEventAutoScriptRun(0, false, false);
SetDlgLower(1, 0, false);
//未知对话
//未知对话
//未知对话
VideoUpdate(0, false);
SetDlgUpper(65, 0, false);
//未知对话
//未知对话
RoleSetDirFrame(1, 0, 0);
VideoUpdate(0, false);
RoleSetDirFrame(1, 0, 1);
VideoUpdate(0, false);
SetDlgUpper(65, 0, false);
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
//未知对话
//未知对话
VideoUpdate(0, false);
RoleSetDirFrame(0, 0, 0);
WaitEventAutoScriptRun(4, false, false);
RoleSetDirFrame(2, 0, 1);
WaitEventAutoScriptRun(4, false, false);
SetDlgLower(1, 0, false);
//未知对话
//未知对话
//未知对话
EventSetTriggerScript(53, 3, "@2993");
EventSetTriggerScript(53, 6, "@2997");
EventModifyPos(49, 14, 0, 32);
EventSetTriggerScript(49, 14, "@2A5B");
EventSetState(49, 15, 0);
EventSetState(49, 16, 0);

['@298B'];
SetDlgUpper(65, 0, false);
//未知对话
//未知对话

['@298F'];
SetDlgUpper(50, 0, false);
//未知对话
//未知对话

['@2993'];
//未知对话
//未知对话
//未知对话

['@2997'];
//未知对话
//未知对话
//未知对话

['@29A3'];
PartySetPos(45, 36, 0);
EventSetDirFrame(53, 2, 0, 1);
EventSetDirFrame(53, 3, 3, 0);
WaitEventAutoScriptRun(6, false, false);
EventSetDirFrame(53, 3, 2, 0);
VideoUpdate(0, false);
SetDlgLower(65, 0, false);
//未知对话
//未知对话
//未知对话
//未知对话
VideoUpdate(0, false);
SetDlgUpper(15, 0, false);
//未知对话
//未知对话
//未知对话
SetDlgLower(65, 0, false);
//未知对话
//未知对话
//未知对话
VideoUpdate(0, false);
SetDlgLower(65, 0, false);
//未知对话
//未知对话
//未知对话
//未知对话
//未知对话
VideoUpdate(0, false);
SetDlgUpper(17, 0, false);
//未知对话
//未知对话
SetDlgLower(65, 0, false);
//未知对话
//未知对话
//未知对话
VideoUpdate(0, false);
SetDlgLower(65, 0, false);
//未知对话
//未知对话
//未知对话
EventSetAutoScript(53, 3, "@27AC");
EventSetDirFrame(53, 2, 0, 0);
FadeOut(0);
SceneEnter(53);
PartySetPos(28, 56, 0);
HeroSetSprite(0, 2, true);
RoleSetDirFrame(3, 0, 0);
ReplaceAndPause();

['@2A35'];
//未知对话
//未知对话
VideoUpdate(0, false);
SetDlgLower(11, 0, false);
//未知对话
//未知对话
//未知对话
VideoUpdate(0, false);
//未知对话
//未知对话
//未知对话
//未知对话
VideoUpdate(0, false);
SetDlgLower(5, 0, false);
//未知对话
//未知对话
//未知对话
//未知对话
VideoUpdate(0, false);
//未知对话
//未知对话
SetBattlefield(FbpWin.鬼阴山_山脚洞口);
BattleStart(33, "", "");
EventSetState(55, 4, 0);
EventSetState(56, 0, 0);

['@2A5B'];
//未知对话
//未知对话
//未知对话
//未知对话
VideoUpdate(0, false);
//未知对话
//未知对话
//未知对话
//未知对话
//未知对话
//未知对话

['@2A97'];
//未知对话
//未知对话

['@2A9A'];
//未知对话
//未知对话

['@2B04'];
VideoUpdate(0, false);
//未知对话
//未知对话
//未知对话
ReplaceAndPause();
['Event_00051_00003_Trigger'];
//未知对话
//未知对话
GotoWithSelect("@2B04");
CashModify(-100, "@2B04");
AddItem(15, 0);

['@2B27'];
//未知对话
//未知对话

['@2B2A'];
//未知对话
//未知对话

['@2B2D'];
//未知对话
//未知对话
//未知对话
ReplaceAndPause();
//未知对话
//未知对话
//未知对话

['@2B35'];
//未知对话
//未知对话
SetDlgLower(1, 0, false);
//未知对话
//未知对话
VideoUpdate(0, false);
//未知对话
//未知对话
//未知对话
//未知对话
VideoUpdate(0, false);
SetDlgLower(1, 0, false);
//未知对话
//未知对话
ReplaceAndPause();
//未知对话
//未知对话

['@2B47'];
//未知对话
//未知对话
//未知对话
ReplaceAndPause();
//未知对话
//未知对话
//未知对话

['@2B4F'];
//未知对话
//未知对话
//未知对话
//未知对话
//未知对话
ReplaceAndPause();
//未知对话
//未知对话
//未知对话

['@2B59'];
//未知对话
//未知对话
//未知对话

['@2B5D'];
//未知对话
//未知对话
//未知对话

['@2B66'];
MusicPlay(Music.白河寒秋, true, false);

['@2BD5'];
NpcMoveToBlock(38, 65, 0, 3);

['@2BD7'];
NpcMoveToBlock(34, 69, 0, 8);

['@2BD9'];
NpcSetDirFrame(1, 0);
NpcMoveToBlock(38, 65, 0, 3);
EventSetState(-1, -1, 0);

['@2C73'];
NpcMoveToBlock(42, 53, 0, 3);
NpcMoveToBlock(44, 51, 0, 3);
NpcSetDirFrame(3, 0);
WaitEventAutoScriptRun(2, false, false);
NpcMoveToBlock(45, 50, 0, 3);
NpcMoveToBlock(31, 36, 1, 8);
EventSetState(-1, -1, 0);

['@2C83'];
NpcMoveToBlock(24, 62, 0, 3);
NpcMoveToBlock(22, 60, 0, 3);
NpcMoveToBlock(27, 55, 0, 3);

['@2E20'];
EventAnimate(0);
GotoWithNop("@2E20", 0);

['@2E58'];
Call("@8E3B");
SceneEnter(61);
PartySetPos(42, 95, 1);
FadeOut(0);

['@2ED7'];
RoleMoveOneStep(16, -8, 0);
WaitEventAutoScriptRun(0, false, false);
RoleMoveOneStep(16, -8, 0);
WaitEventAutoScriptRun(0, false, false);
SetDlgCenter(0, false);
//未知对话
//未知对话

['@30E3'];
RoleSetDirFrame(2, 0, 0);
RoleMoveOneStep(10, -10, 1);
WaitEventAutoScriptRun(0, false, false);
RoleMoveOneStep(6, -6, 2);
WaitEventAutoScriptRun(0, false, false);
RoleMoveOneStep(10, -10, 3);
WaitEventAutoScriptRun(0, false, false);
RoleMoveOneStep(6, -6, 4);
WaitEventAutoScriptRun(0, false, false);

['@3271'];
NpcMoveToBlock(37, 61, 1, 3);
NpcSetDirFrame(2, 0);

['@3327'];
SceneEnter(91);
PartySetPos(25, 76, 1);
FadeOut(0);

['@345D'];
WaitEventAutoScriptRun(3, false, false);
NpcMoveToBlockMutexLock(1, 90, 0, 2);
EventSetState(-1, -1, 0);

['@3479'];
NpcMoveToBlock(24, 39, 0, 8);
NpcMoveToBlock(25, 40, 0, 8);
NpcMoveToBlock(25, 39, 1, 8);
NpcMoveToBlock(40, 53, 1, 8);
EventSetState(-1, -1, 0);

['@3487'];
NpcMoveToBlock(22, 16, 1, 8);
NpcMoveToBlock(15, 9, 0, 8);
EventSetTriggerMode(-1, -1, true, 2);

['@348B'];
NpcMoveToBlock(32, 26, 0, 8);
NpcMoveToBlock(35, 22, 1, 3);
WaitEventAutoScriptRun(2, false, false);
NpcSetFrame(16);

['@34AF'];
NpcSetFrame(4);
ReplaceAndPause();
NpcSetFrame(5);
ReplaceAndPause();
NpcSetFrame(6);
NpcSetFrame(7);
ReplaceAndPause();
NpcSetFrame(8);
WaitEventAutoScriptRun(5, false, false);
['@34B8'];
ReplaceAndPause();
GotoWithProbability(30, "@34B8");
NpcSetFrame(9);
ReplaceAndPause();
NpcSetFrame(10);
WaitEventAutoScriptRun(9, false, false);
GotoWithProbability(16, "@34B8");
EventSetTriggerMode(-1, -1, false, 1);
ReplaceAndPauseWithNop("Event_00083_00024_Auto", 0);

['@34C9'];
NpcSetFrame(2);
ReplaceAndPause();
NpcSetFrame(0);
ReplaceAndPause();
NpcSetFrame(3);
ReplaceAndPause();
NpcSetFrame(0);
NpcSetFrame(4);
WaitEventAutoScriptRun(11, false, false);
NpcSetFrame(5);
ReplaceAndPause();
NpcSetFrame(6);
['@34D5'];
NpcSetFrame(7);
GotoWithProbability(25, "@34D5");
WaitEventAutoScriptRun(3, false, false);
NpcSetFrame(8);
WaitEventAutoScriptRun(2, false, false);
GotoWithProbability(20, "@34D5");
WaitEventAutoScriptRun(4, false, false);
NpcSetFrame(9);
WaitEventAutoScriptRun(10, false, false);
GotoWithProbability(16, "@34D5");
EventSetTriggerMode(-1, -1, false, 1);
ReplaceAndPauseWithNop("Event_00083_00025_Auto", 0);

['@3523'];
NpcMoveToBlockMutexLock(15, 25, 0, 2);
NpcSetDirFrame(2, 0);

['@35CB'];
NpcMoveToBlock(15, 29, 0, 3);
NpcSetDirFrame(0, 0);

['@35CE'];
NpcMoveToBlock(11, 33, 0, 8);
EventSetState(-1, -1, 0);

['@3606'];
NpcSetFrame(12);
['@3607'];
EventModifyPos(-1, -1, -6, -12);
GotoWithNop("@3607", 0);

['@362E'];
NpcMoveToBlock(34, 23, 1, 8);
NpcSetFrame(13);
PlaySound(45);
EventModifyPos(-1, -1, -20, 8);
EventModifyPos(-1, -1, -16, 8);
EventModifyPos(-1, -1, -12, 8);
EventModifyPos(-1, -1, -8, 10);
EventModifyPos(-1, -1, -4, 12);
EventModifyPos(-1, -1, 0, 14);
EventModifyPos(-1, -1, 0, 16);
EventSetState(-1, -1, 0);

['@36C8'];
RoleSetDirFrame(3, 0, 0);
VideoUpdate(0, false);
SetDlgUpper(2, 0, false);
//未知对话
//未知对话
EventSetDirFrame(84, 42, 1, 0);
VideoUpdate(0, false);
SetDlgLower(22, 0, false);
//未知对话
//未知对话
EventSetAutoScript(84, 42, "@3785");
WaitEventAutoScriptRun(8, false, false);
RoleSetDirFrame(2, 0, 0);
WaitEventAutoScriptRun(6, false, false);
RoleSetDirFrame(1, 0, 0);
ReplaceAndPause();

['@36E7'];
//未知对话
//未知对话
//未知对话
ReplaceAndPause();
//未知对话
//未知对话
ReplaceAndPauseWithNop("@36E7", 0);

['@36EF'];
RemoveItem(211, 0, "");
//未知对话
//未知对话
EventSetAutoScript(-1, -1, "@372F");
WaitEventAutoScriptRun(4, false, false);
EventSetState(97, 5, 1);
WaitEventAutoScriptRun(4, false, false);
EventSetDirFrame(97, 5, 0, 1);
WaitEventAutoScriptRun(6, false, false);
//未知对话
//未知对话
EventSetAutoScript(-1, -1, "@3731");
WaitEventAutoScriptRun(5, false, false);
VideoUpdate(0, false);
//未知对话
//未知对话
//未知对话
//未知对话
VideoUpdate(0, false);
SetDlgLower(23, 0, false);
//未知对话
//未知对话
//未知对话
//未知对话
VideoUpdate(0, false);
SetDlgLower(2, 0, false);
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
EventSetDirFrame(97, 4, 1, 0);
EventSetAutoScript(-1, -1, "@3734");
WaitEventAutoScriptRun(13, false, false);
RoleSetDirFrame(0, 0, 0);
WaitEventAutoScriptRun(2, false, false);
RoleSetDirFrame(0, 0, 1);
WaitEventAutoScriptRun(15, false, false);
SetDlgUpper(22, 0, false);
//未知对话
//未知对话
//未知对话
SetDlgLower(1, 0, false);
//未知对话
//未知对话
//未知对话
//未知对话
//未知对话
//未知对话
//未知对话
VideoUpdate(0, false);
SetDlgUpper(23, 0, false);
//未知对话
//未知对话
EventSetState(89, 2, 0);
EventSetStateSequence(89, 3, 89, 11, 2);

['@372F'];
NpcMoveToBlock(43, 24, 1, 3);

['@3731'];
NpcMoveToBlock(44, 25, 0, 3);
NpcSetDirFrame(0, 0);

['@3734'];
NpcMoveToBlock(43, 24, 1, 3);
EventSetState(97, 5, 0);
ReplaceAndPause();
ReplaceAndPause();
NpcMoveToBlock(40, 28, 0, 3);
EventSetState(-1, -1, 0);

//未知对话
EventSetAutoScript(-1, -1, "Event_00085_00033_Auto");
EventSetAutoScript(84, 34, "@345D");

//未知对话

['@3785'];
NpcMoveToBlock(38, 26, 0, 8);
NpcMoveToBlock(32, 20, 0, 8);
NpcMoveToBlock(30, 22, 0, 8);
NpcMoveToBlock(16, 8, 0, 8);
NpcMoveToBlock(13, 11, 0, 8);
NpcSetDirFrame(2, 0);

['@37D5'];
NpcMoveToBlock(10, 14, 0, 8);
NpcMoveToBlock(11, 15, 0, 8);

['@37EA'];
NpcMoveToBlock(10, 14, 0, 8);
NpcMoveToBlock(13, 12, 0, 8);
NpcSetDirFrame(3, 0);

['@37FB'];
//未知对话
//未知对话
ReplaceAndPause();
//未知对话
//未知对话
//未知对话
//未知对话

['@38D9'];
MusicStop(0);
PartySetPos(17, 18, 0);
RoleSetDirFrame(3, 0, 0);
WaitEventAutoScriptRun(4, false, false);
RoleSetDirFrame(0, 0, 0);
WaitEventAutoScriptRun(5, false, false);
RoleSetDirFrame(3, 0, 0);
VideoUpdate(0, false);
//未知对话
//未知对话
//未知对话
VideoRestore();
//未知对话
EventModifyPos(84, 21, -32, -16);
EventModifyPos(84, 26, 16, -8);
EventSetAutoScript(84, 21, "Event_00006_00014_Auto");
EventSetAutoScript(84, 26, "Event_00023_00016_Auto");
EventSetState(84, 22, 0);
EventSetState(84, 23, 0);
EventSetState(84, 24, 0);
EventSetState(84, 25, 0);
SceneEnter(82);
FadeOut(0);
ReplaceAndPause();

['@38F2'];
VideoUpdate(0, false);
//未知对话
ReplaceAndPause();
['@38F5'];
//未知对话
//未知对话
GotoWithSelect("@38F2");
CashModify(-100, "@38F2");
VideoUpdate(0, false);
//未知对话
//未知对话
EventSetAutoScript(84, 11, "@3904");
EventSetAutoScript(84, 12, "@3908");
EventSetTriggerScript(84, 12, "@3901");
EventSetTriggerScript(84, 12, "@3901");
ReplaceAndPause();
['@3901'];
//未知对话
//未知对话

['@3904'];
NpcMoveToBlockMutexLock(44, 59, 0, 2);
NpcSetDirFrame(3, 0);
NpcSetDirFrame(0, 0);

['@3908'];
NpcMoveToBlockMutexLock(42, 60, 1, 2);
NpcSetDirFrame(3, 0);
NpcSetDirFrame(2, 0);

['@396C'];
NpcSetDirFrame(1, 0);
EventWalkOneStep(-1, -1, 0, -8);
EventWalkOneStep(-1, -1, -4, -2);
EventWalkOneStep(-1, -1, -4, -2);
EventWalkOneStep(-1, -1, -4, -2);
EventWalkOneStep(-1, -1, -4, -2);

['@3973'];
EventSetState(81, 26, 2);
EventSetState(81, 27, 2);
EventSetState(82, 0, 2);
EventSetState(1, 0, 2);
EventSetState(1, 0, 2);
EventSetState(1, 0, 2);
EventSetState(1, 0, 2);
EventSetState(1, 0, 2);
EventSetState(1, 0, 2);
EventSetState(1, 0, 2);
EventSetState(93, 18, 0);
EventSetState(84, 30, 0);
EventSetState(84, 32, 0);
EventSetState(84, 35, 0);
EventSetState(84, 36, 0);
EventSetState(82, 11, 0);
EventSetState(82, 12, 0);
EventSetState(82, 13, 0);
PartySetPos(48, 63, 0);
RoleSetDirFrame(2, 0, 0);
PlaySound(213);
WaitEventAutoScriptRun(10, false, false);
MusicPlay(Music.乐逍遥, true, false);
SetDlgUpper(62, 0, false);
//未知对话
//未知对话
//未知对话
VideoUpdate(0, false);
SetDlgLower(1, 0, false);
//未知对话
//未知对话
VideoUpdate(0, false);
SetDlgLower(62, 0, false);
//未知对话
//未知对话
//未知对话
SetDlgUpper(42, 0, false);
//未知对话
//未知对话
VideoUpdate(0, false);
SetDlgLower(62, 0, false);
//未知对话
//未知对话
//未知对话
VideoUpdate(0, false);
SetDlgUpper(42, 0, false);
//未知对话
//未知对话
//未知对话
VideoUpdate(0, false);
SetDlgLower(62, 0, false);
//未知对话
//未知对话
//未知对话
//未知对话
VideoUpdate(0, false);
SetDlgUpper(42, 0, false);
//未知对话
//未知对话
SetDlgLower(62, 0, false);
//未知对话
//未知对话
VideoUpdate(0, false);
SetDlgUpper(42, 0, false);
//未知对话
//未知对话
//未知对话
//未知对话
//未知对话
//未知对话
VideoUpdate(0, false);
SetDlgLower(62, 0, false);
//未知对话
//未知对话
VideoUpdate(0, false);
SetDlgUpper(3, 0, false);
//未知对话
//未知对话
SetDlgLower(62, 0, false);
//未知对话
//未知对话
VideoUpdate(0, false);
//未知对话
//未知对话
//未知对话
SetDlgUpper(62, 0, false);
//未知对话
//未知对话
VideoUpdate(0, false);
SetDlgLower(62, 0, false);
//未知对话
//未知对话
//未知对话
//未知对话
//未知对话
VideoUpdate(0, false);
SetDlgUpper(42, 0, false);
//未知对话
//未知对话
VideoUpdate(0, false);
SetDlgLower(62, 0, false);
//未知对话
//未知对话
//未知对话
VideoUpdate(0, false);
SetDlgUpper(42, 0, false);
//未知对话
//未知对话
//未知对话
//未知对话
//未知对话
//未知对话
VideoUpdate(0, false);
SetDlgLower(62, 0, false);
//未知对话
//未知对话
VideoRestore();
//未知对话
//未知对话
//未知对话
VideoUpdate(0, false);
SetDlgUpper(42, 0, false);
//未知对话
//未知对话
//未知对话
//未知对话
//未知对话
//未知对话
//未知对话
VideoUpdate(0, false);
SetDlgLower(62, 0, false);
//未知对话
//未知对话
//未知对话
//未知对话
//未知对话
VideoUpdate(0, false);
SetDlgUpper(42, 0, false);
//未知对话
//未知对话
//未知对话
//未知对话
//未知对话
VideoUpdate(0, false);
SetDlgLower(62, 0, false);
//未知对话
//未知对话
//未知对话
VideoUpdate(0, false);
SetDlgUpper(42, 0, false);
//未知对话
//未知对话
//未知对话
//未知对话
//未知对话
VideoUpdate(0, false);
SetDlgLower(0, 0, false);
//未知对话
//未知对话
//未知对话
EventSetAutoScript(81, 3, "@396C");
WaitEventAutoScriptRun(8, false, false);
FadeOut(0);
EventModifyPos(81, 3, 16, 16);
VideoUpdate(0, false);
//未知对话
//未知对话
//未知对话
VideoUpdate(0, false);
SetDlgLower(0, 0, false);
//未知对话
//未知对话
//未知对话
EventSetDirFrame(81, 3, 0, 0);
VideoUpdate(0, false);
SetDlgUpper(42, 0, false);
//未知对话
//未知对话
VideoUpdate(0, false);
SetDlgLower(62, 0, false);
//未知对话
//未知对话
//未知对话
VideoRestore();
//未知对话
//未知对话
//未知对话
VideoUpdate(0, false);
SetDlgUpper(42, 0, false);
//未知对话
//未知对话
//未知对话
EventSetDirFrame(82, 0, 2, 0);
VideoUpdate(0, false);
SetDlgLower(0, 0, false);
//未知对话
//未知对话
//未知对话
//未知对话
//未知对话
EventSetDirFrame(81, 27, 2, 0);
VideoUpdate(0, false);
//未知对话
//未知对话
//未知对话
//未知对话
VideoUpdate(0, false);
SetDlgLower(62, 0, false);
//未知对话
//未知对话
//未知对话
VideoUpdate(0, false);
SetDlgUpper(42, 0, false);
//未知对话
//未知对话
//未知对话
VideoRestore();
//未知对话
//未知对话
//未知对话
//未知对话
VideoUpdate(0, false);
SetDlgLower(62, 0, false);
//未知对话
//未知对话
//未知对话
VideoRestore();
//未知对话
FadeOut(0);
EventSetState(81, 26, 0);
EventSetDirFrame(82, 0, 3, 0);
EventSetDirFrame(81, 27, 3, 0);
EventSetState(91, 17, 1);
EventSetState(91, 16, 0);
EventSetState(81, 25, 1);
WaitEventAutoScriptRun(12, false, false);
RoleSetDirFrame(3, 0, 0);
SetDlgLower(21, 0, false);
//未知对话
//未知对话
WaitEventAutoScriptRun(12, false, false);
SetDlgLower(62, 0, false);
//未知对话
//未知对话
//未知对话
RoleSetDirFrame(2, 0, 0);
VideoUpdate(0, false);
EventSetDirFrame(81, 25, 2, 0);
VideoUpdate(0, false);
//未知对话
//未知对话
RoleSetDirFrame(3, 0, 0);
EventSetDirFrame(81, 25, 1, 0);
VideoUpdate(0, false);
SetDlgUpper(1, 0, false);
//未知对话
//未知对话
SetDlgLower(21, 0, false);
//未知对话
//未知对话
//未知对话
EventSetState(81, 25, 0);
PartySetRole(1, 3, 0);
RoleSetDirFrame(0, 0, 0);
EventSetTriggerScript(84, 27, "@3A8E");
EventSetTriggerScript(84, 28, "@A9FA");
EventSetTriggerScript(84, 29, "@AA04");
EventSetStateSequence(84, 43, 85, 0, 2);

['@3A8E'];
//未知对话
//未知对话
EventModifyPos(84, 27, -32, 0);
VideoUpdate(0, false);
EventSetAutoScript(84, 27, "Event_00006_00014_Auto");
EventSetTriggerScript(84, 28, "@3A97");
EventSetTriggerScript(84, 28, "@3A97");
EventSetTriggerScript(84, 29, "@3A97");
ReplaceAndPause();
['@3A97'];
//未知对话
//未知对话
//未知对话
VideoRestore();
//未知对话

['@3AA3'];
NpcSetFrame(1);
WaitEventAutoScriptRun(3, false, false);
['@3AA5'];
NpcSetFrame(2);
WaitEventAutoScriptRun(4, false, false);
NpcSetFrame(3);
PlaySound(92);
WaitEventAutoScriptRun(2, false, false);
ReplaceAndPauseWithNop("@3AA5", 0);

['@3AAC'];
NpcSetFrame(1);
WaitEventAutoScriptRun(6, false, false);
ReplaceAndPauseWithNop("@3AA5", 0);

['@3AB0'];
WaitEventAutoScriptRun(10, false, false);
['@3AB1'];
NpcSetFrame(1);
ReplaceAndPause();
NpcSetFrame(2);
NpcSetFrame(0);
ReplaceAndPauseWithNop("@3AB1", 0);

['@3C26'];
VideoUpdate(0, false);
SetDlgUpper(0, 0, false);
//未知对话
//未知对话
VideoUpdate(0, false);
SetDlgLower(0, 0, false);
//未知对话
//未知对话
//未知对话
//未知对话
ReplaceAndPause();
SetDlgLower(0, 0, false);
//未知对话
//未知对话

['@3C87'];
SceneEnter(110);
PartySetPos(12, 66, 0);
FadeOut(0);

['@3C95'];
SetDlgLower(21, 0, false);
//未知对话
//未知对话
VideoUpdate(0, false);
SetDlgUpper(0, 0, false);
//未知对话
//未知对话
//未知对话
//未知对话
//未知对话
VideoUpdate(0, false);
SetDlgLower(21, 0, false);
//未知对话
//未知对话
EventSetState(111, 4, 2);
EventSetState(111, 5, 2);
EventSetState(111, 6, 2);
WaitEventAutoScriptRun(2, false, true);
WaitEventAutoScriptRun(34, false, false);
SetDlgLower(0, 0, false);
//未知对话
//未知对话
WaitEventAutoScriptRun(4, false, false);
RoleSetDirFrame(1, 0, 0);
WaitEventAutoScriptRun(2, false, false);
SetDlgLower(21, 0, false);
//未知对话
//未知对话
RoleSetDirFrame(0, 0, 1);
WaitEventAutoScriptRun(0, false, false);
RoleSetDirFrame(1, 0, 1);
PartySetPos(40, 57, 0);
WaitEventAutoScriptRun(0, false, false);
PartyWalkToBlock(39, 56, 0, 4);
WaitEventAutoScriptRun(2, false, false);
SetDlgUpper(67, 0, false);
//未知对话
//未知对话
//未知对话
VideoUpdate(0, false);
SetDlgLower(21, 0, false);
//未知对话
//未知对话
//未知对话
VideoUpdate(0, false);
SetDlgUpper(67, 0, false);
//未知对话
//未知对话
//未知对话
//未知对话
//未知对话
VideoUpdate(0, false);
SetDlgLower(21, 0, false);
//未知对话
//未知对话
SetDlgUpper(67, 0, false);
//未知对话
//未知对话
//未知对话
FadeOut(0);
SceneEnter(101);

['@3E60'];
VideoUpdate(0, false);
//未知对话
//未知对话
VideoRestore();
//未知对话
//未知对话
//未知对话
SetDlgLower(2, 0, false);
//未知对话
//未知对话
//未知对话
VideoUpdate(0, false);
SetDlgUpper(0, 0, false);
//未知对话
//未知对话
//未知对话
//未知对话
VideoRestore();
//未知对话
//未知对话
VideoUpdate(0, false);
SetDlgLower(5, 0, false);
//未知对话
//未知对话
ReplaceAndPause();
//未知对话
//未知对话
//未知对话
//未知对话
//未知对话

['@3E7F'];
VideoUpdate(0, false);
//未知对话
//未知对话
VideoRestore();
//未知对话
//未知对话
//未知对话
//未知对话
VideoRestore();
//未知对话
//未知对话
//未知对话
ReplaceAndPauseWithNop("Event_00132_00012_Trigger", 0);

['@3E8D'];
//未知对话
//未知对话
//未知对话
ReplaceAndPauseWithNop("Event_00132_00012_Trigger", 0);

['@3EAA'];
NpcMoveToBlock(32, 66, 0, 3);
NpcMoveToBlock(35, 69, 1, 3);
NpcMoveToBlock(35, 70, 0, 3);
NpcMoveToBlock(35, 70, 1, 3);
EventSetState(-1, -1, 0);

['@3F5B'];
ReplaceAndPause();
['Event_00128_00004_Trigger'];
//未知对话
//未知对话
//未知对话
GotoWithSelect("@3F5B");
VideoUpdate(0, false);
CashModify(-100, "@3F5B");
AddItem(26, 0);
VideoUpdate(0, false);
//未知对话
//未知对话

['@3FFD'];
SceneEnter(110);
PartySetPos(28, 66, 1);
FadeOut(0);

['@405B'];
VideoUpdate(0, false);
SetDlgLower(0, 0, false);
//未知对话
//未知对话
//未知对话
RoleSetDirFrame(0, 0, 1);
VideoUpdate(0, false);
SetDlgUpper(21, 0, false);
//未知对话
//未知对话
VideoUpdate(0, false);
SetDlgLower(0, 0, false);
//未知对话
//未知对话
VideoUpdate(0, false);
SetDlgUpper(21, 0, false);
//未知对话
//未知对话
//未知对话
//未知对话
VideoUpdate(0, false);
SetDlgLower(0, 0, false);
//未知对话
//未知对话
//未知对话
VideoRestore();
//未知对话
PartySetFollower(0, 0);
FadeOut(0);
VideoUpdate(0, false);
SetDlgCenter(0, false);
//未知对话
VideoUpdate(0, false);
SetDlgUpper(22, 0, false);
//未知对话
//未知对话

['@4083'];
NpcSetFrame(1);
EventModifyPos(-1, -1, 1, 0);
EventModifyPos(-1, -1, 4, 0);
EventModifyPos(-1, -1, 6, 0);
EventModifyPos(-1, -1, 8, 0);
EventModifyPos(-1, -1, 12, 0);
['@4089'];
EventModifyPos(-1, -1, 16, 0);
GotoWithNop("@4089", 0);

['@409A'];
EventSetTriggerMode(-1, -1, false, 1);
SetDlgUpper(0, 0, false);
//未知对话
//未知对话
//未知对话
//未知对话
VideoUpdate(0, false);
SetDlgLower(1, 0, false);
//未知对话
//未知对话
//未知对话
VideoUpdate(0, false);
SetDlgUpper(0, 0, false);
//未知对话
//未知对话
//未知对话
VideoUpdate(0, false);
SetDlgLower(1, 0, false);
//未知对话
//未知对话
//未知对话
//未知对话
WaitEventAutoScriptRun(2, false, false);
NpcSetDirFrame(0, 0);
VideoUpdate(0, false);
SetDlgUpper(0, 0, false);
//未知对话
//未知对话
NpcSetDirFrame(1, 0);
VideoUpdate(0, false);
SetDlgUpper(0, 0, false);
//未知对话
//未知对话
//未知对话
VideoRestore();
//未知对话
VideoUpdate(0, false);
SetDlgLower(21, 0, false);
//未知对话
//未知对话
VideoUpdate(0, false);
SetDlgUpper(0, 0, false);
//未知对话
//未知对话
//未知对话
//未知对话
VideoRestore();
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
//未知对话
VideoUpdate(0, false);
SetDlgUpper(0, 0, false);
//未知对话
//未知对话
//未知对话
//未知对话
VideoRestore();
//未知对话
//未知对话
//未知对话
VideoUpdate(0, false);
SetDlgBox(0);
//未知对话
AddItem(210, 0);
VideoUpdate(0, false);
SetDlgUpper(0, 0, false);
//未知对话
//未知对话
//未知对话
//未知对话
SetDlgLower(1, 0, false);
//未知对话
//未知对话
VideoUpdate(0, false);
SetDlgBox(0);
//未知对话
HeroAddMagic(83, 1);
ReplaceAndPause();
//未知对话
//未知对话

['@40F3'];
MusicPlay(Music.十面埋伏, true, false);
HeroSetSprite(0, 232, false);
PartySetRole(1, 0, 0);
PartySetPos(29, 58, 0);
PlaySound(123);
WaitEventAutoScriptRun(8, false, false);
PlaySound(190);
ViewportMove(0, 4, 40);
WaitEventAutoScriptRun(4, false, false);
SetDlgLower(60, 0, false);
//未知对话
//未知对话
VideoUpdate(0, false);
SetDlgUpper(44, 0, false);
//未知对话
//未知对话
//未知对话
//未知对话
VideoUpdate(0, false);
SetDlgLower(60, 0, false);
//未知对话
//未知对话
WaitEventAutoScriptRun(8, false, false);
SetDlgUpper(44, 0, false);
//未知对话
//未知对话
//未知对话
VideoUpdate(0, false);
SetDlgUpper(0, 0, false);
//未知对话
//未知对话
VideoUpdate(0, false);
SetDlgUpper(44, 0, false);
//未知对话
//未知对话
//未知对话
//未知对话
//未知对话
VideoUpdate(0, false);
//未知对话
//未知对话
VideoUpdate(0, false);
SetDlgUpper(44, 0, false);
//未知对话
//未知对话
//未知对话
//未知对话
SetDlgLower(60, 0, false);
//未知对话
//未知对话
PartySetRole(5, 6, 5);
AddItem(88, 9);
AddItem(78, 9);
BattleEnableAuto();
SetBattleMusic(Music.逆天而行);
SetBattlefield(FbpWin.白苗街巷);
BattleStart(37, "", "");
SetBattleMusic(Music.势如破竹);
MusicPlay(Music.逆天而行, true, false);
PartySetRole(1, 0, 0);
BattleEnd();
RemoveItem(88, 9, "");
RemoveItem(78, 9, "");
PartySetPos(29, 69, 0);
ViewportMove(0, 0, 0);
VideoUpdate(0, false);
SetDlgLower(60, 0, false);
//未知对话
//未知对话
VideoUpdate(0, false);
SetDlgUpper(44, 0, false);
//未知对话
//未知对话
//未知对话
//未知对话
VideoRestore();
//未知对话
//未知对话
VideoUpdate(0, false);
SetDlgLower(60, 0, false);
//未知对话
//未知对话
VideoUpdate(0, false);
SetDlgUpper(44, 0, false);
//未知对话
//未知对话
//未知对话
//未知对话
//未知对话
VideoRestore();
//未知对话
//未知对话
//未知对话
VideoUpdate(0, false);
SetDlgLower(60, 0, false);
//未知对话
//未知对话
//未知对话
VideoUpdate(0, false);
SetDlgUpper(44, 0, false);
//未知对话
//未知对话
//未知对话
//未知对话
VideoRestore();
//未知对话
//未知对话
//未知对话
VideoUpdate(0, false);
SetDlgLower(60, 0, false);
//未知对话
//未知对话
//未知对话
//未知对话
//未知对话
VideoUpdate(0, false);
SetDlgUpper(44, 0, false);
//未知对话
//未知对话
//未知对话
EventSetState(106, 16, 0);
EventSetState(106, 17, 1);
EventModifyPos(106, 12, -16, 8);
VideoUpdate(0, false);
SetDlgLower(60, 0, false);
//未知对话
//未知对话
//未知对话
VideoUpdate(0, false);
SetDlgUpper(44, 0, false);
//未知对话
//未知对话
VideoUpdate(0, false);
SetDlgLower(60, 0, false);
//未知对话
//未知对话
MusicStop(1);
VideoUpdate(0, false);
SetDlgCenter(0, false);
//未知对话
VideoShake(30, 0);
WaitEventAutoScriptRun(14, false, false);
PlaySound(175);
FadeColor(26, 2, false);
EventSetTriggerScript(107, 1, "@3C87");
EventSetTriggerScript(110, 1, "@3FFD");
EventSetTriggerScript(104, 3, "@52B2");
SceneSetScript(111, "@424E", "");
SceneEnter(111);
ReplaceAndPause();

['@4190'];
NpcMoveToBlock(23, 40, 1, 3);
NpcMoveToBlockMutexLock(24, 41, 0, 2);
NpcSetDirFrame(3, 0);

['@4194'];
NpcMoveToBlock(27, 38, 0, 3);

['@424B'];
NpcMoveToBlock(25, 39, 1, 8);
NpcMoveToBlock(32, 46, 0, 8);

['@424E'];
Delay(10);
VideoShake(0, 0);
PartySetPos(0, 0, 0);
VideoUpdate(0, false);
FadeColor(26, 4, true);
SetDlgCenter(0, false);
//未知对话
//未知对话
VideoUpdate(0, false);
SetDlgCenter(0, false);
//未知对话
FadeOut(0);
PartySetPos(26, 41, 0);
PlaySound(26);
VideoUpdate(0, false);
SetDlgCenter(0, false);
//未知对话
//未知对话
EventSetDirFrame(110, 5, 0, 0);
WaitEventAutoScriptRun(2, false, false);
EventSetDirFrame(110, 6, 0, 0);
WaitEventAutoScriptRun(6, false, false);
EventSetDirFrame(110, 5, 0, 1);
WaitEventAutoScriptRun(4, false, false);
EventSetDirFrame(110, 5, 0, 0);
VideoUpdate(0, false);
SetDlgCenter(0, false);
//未知对话
PartySetPos(25, 41, 1);
RoleSetDirFrame(3, 0, 0);
EventSetState(110, 5, 0);
EventSetState(110, 6, 0);
HeroSetSprite(0, 2, false);
PartySetRole(1, 3, 0);
VideoUpdate(0, false);
//未知对话
//未知对话
RoleRevive(true, 10);
RoleModifyHPMP(true, 9999);
ReplaceAndPause();

['@431A'];
ReplaceAndPause();
['Event_00112_00015_Trigger'];
//未知对话
//未知对话
GotoWithSelect("@431A");
CashModify(-30, "@4321");
AddItem(20, 0);

['@4321'];
VideoUpdate(0, false);
//未知对话
//未知对话
ReplaceAndPauseWithNop("Event_00112_00015_Trigger", 0);

['@445C'];
SetDlgLower(1, 0, false);
//未知对话
//未知对话
//未知对话
VideoUpdate(0, false);
SetDlgUpper(0, 0, false);
//未知对话
//未知对话
VideoUpdate(0, false);
//未知对话
//未知对话
//未知对话
VideoUpdate(0, false);
SetDlgLower(1, 0, false);
//未知对话
VideoUpdate(0, false);
SetDlgUpper(0, 0, false);
//未知对话
//未知对话
//未知对话
VideoUpdate(0, false);
SetDlgLower(5, 0, false);
//未知对话
VideoUpdate(0, false);
SetDlgUpper(0, 0, false);
//未知对话
//未知对话
VideoUpdate(0, false);
SetDlgLower(1, 0, false);
//未知对话
VideoUpdate(0, false);
SetDlgUpper(0, 0, false);
//未知对话
//未知对话
EventSetTriggerScript(131, 13, "@448A");
ReplaceAndPause();
//未知对话

['@448A'];
//未知对话
//未知对话
EventSetTriggerScript(134, 2, "@4492");
ReplaceAndPause();
//未知对话
//未知对话
ReplaceAndPauseWithNop("@448A", 0);

['@4492'];
EventSetTriggerScript(134, 3, "@44A5");
SceneSetScript(132, "@44AE", "");
//未知对话
//未知对话
VideoUpdate(0, false);
//未知对话
//未知对话
//未知对话
VideoUpdate(0, false);
SetDlgLower(1, 0, false);
//未知对话
//未知对话
VideoUpdate(0, false);
SetDlgUpper(0, 0, false);
//未知对话
Replace();
//未知对话
//未知对话

['@44A5'];
//未知对话
ReplaceAndPause();
//未知对话
//未知对话
//未知对话

['@44AE'];
EventSetState(134, 2, 0);
PartyWalkToBlock(9, 49, 1, 2);
PartyWalkToBlock(8, 50, 1, 2);
WaitEventAutoScriptRun(0, false, false);
RoleSetDirFrame(3, 0, 0);
WaitEventAutoScriptRun(0, false, false);
RoleSetDirFrame(2, 0, 0);
WaitEventAutoScriptRun(6, false, false);
EventSetState(132, 0, 2);
WaitEventAutoScriptRun(14, false, false);
SetDlgUpper(56, 0, false);
//未知对话
//未知对话
VideoUpdate(0, false);
SetDlgLower(1, 0, false);
//未知对话
VideoUpdate(0, false);
SetDlgUpper(56, 0, false);
//未知对话
//未知对话
VideoUpdate(0, false);
SetDlgLower(1, 0, false);
//未知对话
//未知对话
//未知对话
VideoUpdate(0, false);
SetDlgUpper(56, 0, false);
//未知对话
//未知对话
//未知对话
//未知对话
//未知对话
//未知对话
//未知对话
VideoRestore();
//未知对话
//未知对话
//未知对话
VideoUpdate(0, false);
SetDlgLower(1, 0, false);
//未知对话
//未知对话
EventSetTriggerScript(100, 25, "@44E0");
ReplaceAndPause();

['@44E0'];
SetDlgLower(1, 0, false);
//未知对话
//未知对话
//未知对话
VideoUpdate(0, false);
SetDlgUpper(0, 0, false);
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
SetDlgLower(23, 0, false);
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
SetDlgLower(22, 0, false);
//未知对话
//未知对话
VideoUpdate(0, false);
SetDlgUpper(0, 0, false);
//未知对话
//未知对话
//未知对话
VideoUpdate(0, false);
SetDlgLower(23, 0, false);
//未知对话
//未知对话
VideoUpdate(0, false);
SetDlgUpper(0, 0, false);
//未知对话
//未知对话
VideoUpdate(0, false);
SetDlgLower(9, 0, false);
//未知对话
//未知对话
//未知对话
//未知对话
VideoUpdate(0, false);
SetDlgUpper(23, 0, false);
//未知对话
//未知对话
//未知对话
//未知对话
VideoUpdate(0, false);
SetDlgLower(1, 0, false);
//未知对话
//未知对话
//未知对话
SetDlgUpper(22, 0, false);
//未知对话
//未知对话
EventSetState(131, 13, 0);
EventSetState(132, 0, 0);
EventSetState(134, 3, 0);
EventSetState(134, 4, 2);
EventSetState(135, 0, 2);
ReplaceAndPause();
//未知对话

['@4536'];
VideoUpdate(0, false);
//未知对话
//未知对话
//未知对话
ReplaceAndPause();
['Event_00101_00026_Trigger'];
//未知对话
//未知对话
GotoWithSelect("@4536");
VideoUpdate(0, false);
//未知对话
//未知对话
//未知对话
//未知对话
//未知对话
VideoUpdate(0, false);
SetDlgLower(21, 0, false);
//未知对话
VideoUpdate(0, false);
SetDlgUpper(0, 0, false);
//未知对话
//未知对话
//未知对话
GotoWithSelect("@4536");
VideoUpdate(0, false);
EventSetState(100, 9, 2);
//未知对话
//未知对话
VideoUpdate(0, false);
//未知对话
//未知对话
VideoUpdate(0, false);
//未知对话
//未知对话
//未知对话
VideoUpdate(0, false);
//未知对话
//未知对话
//未知对话
VideoUpdate(0, false);
//未知对话
//未知对话
//未知对话
VideoUpdate(0, false);
//未知对话
//未知对话
//未知对话
SetDlgLower(23, 0, false);
//未知对话
//未知对话
VideoUpdate(0, false);
SetDlgUpper(0, 0, false);
//未知对话
//未知对话
//未知对话
//未知对话
//未知对话
//未知对话
//未知对话
//未知对话
VideoUpdate(0, false);
SetDlgLower(22, 0, false);
//未知对话
//未知对话
//未知对话
SceneSetScript(119, "@4755", "");
CashHalve();
['@4578'];
ReplaceAndPause();
//未知对话
//未知对话
//未知对话
//未知对话
GotoWithSelect("@4578");
VideoUpdate(0, false);
//未知对话
//未知对话
CashModify(-100, "@4578");
VideoUpdate(0, false);
//未知对话
//未知对话
VideoUpdate(0, false);
SetDlgLower(21, 0, false);
//未知对话
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
SetDlgLower(3, 0, false);
//未知对话
//未知对话
VideoUpdate(0, false);
SetDlgUpper(0, 0, false);
//未知对话
//未知对话
//未知对话
//未知对话
//未知对话
//未知对话
//未知对话
//未知对话
EventSetTriggerScript(133, 0, "@4E2D");
ReplaceAndPause();
//未知对话
//未知对话

['@45E8'];
SceneEnter(122);
PartySetPos(17, 42, 0);
FadeOut(0);

['@463E'];
PartyWalkToBlock(12, 40, 1, 2);
WaitEventAutoScriptRun(6, false, false);
RoleSetDirFrame(0, 0, 0);
VideoUpdate(0, false);
SetDlgLower(24, 0, false);
//未知对话
//未知对话
VideoUpdate(0, false);
SetDlgUpper(1, 0, false);
//未知对话
//未知对话
//未知对话
VideoRestore();
//未知对话
//未知对话
//未知对话
RoleSetDirFrame(1, 0, 0);
VideoUpdate(0, false);
SetDlgLower(22, 0, false);
//未知对话
//未知对话
//未知对话
SetDlgUpper(6, 0, false);
//未知对话
//未知对话
//未知对话
RoleSetDirFrame(3, 0, 0);
VideoUpdate(0, false);
SetDlgLower(22, 0, false);
//未知对话
//未知对话
ReplaceAndPause();

['@465F'];
EventSetState(118, 8, 0);
EventSetState(120, 2, 0);
EventSetState(120, 3, 0);
EventSetState(120, 4, 0);
EventSetState(120, 5, 1);
EventSetState(121, 0, 1);
PartySetRole(3, 0, 0);
PartySetPos(18, 32, 1);
RoleMoveOneStep(0, 0, 1);
RoleSetDirFrame(3, 0, 0);
VideoUpdate(0, false);
SetDlgLower(67, 0, false);
//未知对话
//未知对话
VideoUpdate(0, false);
SetDlgUpper(6, 0, false);
//未知对话
//未知对话
VideoUpdate(0, false);
SetDlgUpper(21, 0, false);
//未知对话
//未知对话
//未知对话
VideoUpdate(0, false);
SetDlgLower(67, 0, false);
//未知对话
//未知对话
//未知对话
//未知对话
//未知对话
//未知对话
//未知对话
//未知对话
VideoRestore();
//未知对话
//未知对话
//未知对话
VideoUpdate(0, false);
SetDlgUpper(21, 0, false);
//未知对话
//未知对话
//未知对话
//未知对话
VideoUpdate(0, false);
SetDlgLower(67, 0, false);
//未知对话
//未知对话
//未知对话
//未知对话
//未知对话
VideoRestore();
//未知对话
//未知对话
//未知对话
VideoRestore();
//未知对话
//未知对话
//未知对话
//未知对话
VideoRestore();
//未知对话
//未知对话
//未知对话
VideoRestore();
//未知对话
//未知对话
//未知对话
SetDlgUpper(21, 0, false);
//未知对话
//未知对话
VideoUpdate(0, false);
SetDlgLower(67, 0, false);
//未知对话
//未知对话
//未知对话
//未知对话
VideoUpdate(0, false);
SetDlgUpper(9, 0, false);
//未知对话
//未知对话
SetDlgLower(22, 0, false);
//未知对话
//未知对话
VideoUpdate(0, false);
SetDlgUpper(3, 0, false);
//未知对话
//未知对话
VideoUpdate(0, false);
SetDlgLower(22, 0, false);
//未知对话
//未知对话
//未知对话
EventSetTriggerScript(118, 4, "@45E8");
SceneEnter(122);
FadeOut(0);
ReplaceAndPause();

['@4755'];
MusicStop(0);
EventSetState(100, 9, 0);
EventSetState(118, 9, 2);
EventSetState(118, 10, 2);
EventSetState(121, 2, 0);
PartyWalkToBlock(33, 39, 1, 4);
PartyWalkToBlock(35, 38, 0, 4);
RoleSetDirFrame(1, 0, 0);
RoleSetDirFrame(1, 0, 1);
EventSetDirFrame(118, 9, 3, 0);
VideoUpdate(0, false);
SetDlgLower(24, 0, false);
//未知对话
//未知对话
//未知对话
VideoUpdate(0, false);
SetDlgUpper(64, 0, false);
//未知对话
//未知对话
VideoUpdate(0, false);
SetDlgLower(22, 0, false);
//未知对话
//未知对话
EventSetDirFrame(118, 10, 3, 0);
VideoUpdate(0, false);
SetDlgUpper(67, 0, false);
//未知对话
//未知对话
//未知对话
RoleSetDirFrame(3, 0, 0);
VideoUpdate(0, false);
SetDlgLower(23, 0, false);
//未知对话
//未知对话
//未知对话
//未知对话
VideoRestore();
//未知对话
//未知对话
VideoUpdate(0, false);
SetDlgUpper(67, 0, false);
//未知对话
//未知对话
VideoUpdate(0, false);
SetDlgLower(22, 0, false);
//未知对话
//未知对话
RoleSetDirFrame(1, 0, 0);
VideoUpdate(0, false);
SetDlgLower(23, 0, false);
//未知对话
//未知对话
//未知对话
VideoUpdate(0, false);
SetDlgUpper(64, 0, false);
//未知对话
//未知对话
//未知对话
VideoRestore();
//未知对话
//未知对话
//未知对话
VideoRestore();
//未知对话
//未知对话
//未知对话
EventSetDirFrame(118, 10, 0, 0);
VideoUpdate(0, false);
SetDlgLower(0, 0, false);
//未知对话
//未知对话
//未知对话
//未知对话
WaitEventAutoScriptRun(2, false, false);
EventSetDirFrame(118, 9, 2, 0);
VideoUpdate(0, false);
SetDlgLower(0, 0, false);
//未知对话
//未知对话
//未知对话
//未知对话
EventSetDirFrame(118, 9, 3, 0);
EventSetDirFrame(118, 10, 3, 0);
VideoUpdate(0, false);
SetDlgUpper(64, 0, false);
//未知对话
//未知对话
//未知对话
//未知对话
VideoUpdate(0, false);
SetDlgLower(25, 0, false);
//未知对话
//未知对话
//未知对话
VideoUpdate(0, false);
SetDlgUpper(64, 0, false);
//未知对话
//未知对话
//未知对话
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
VideoRestore();
//未知对话
//未知对话
VideoUpdate(0, false);
SetDlgUpper(64, 0, false);
//未知对话
//未知对话
//未知对话
VideoUpdate(0, false);
SetDlgLower(1, 0, false);
//未知对话
//未知对话
WaitEventAutoScriptRun(2, false, false);
RoleSetDirFrame(0, 0, 0);
WaitEventAutoScriptRun(5, false, false);
RoleSetDirFrame(1, 0, 0);
VideoUpdate(0, false);
SetDlgLower(22, 0, false);
//未知对话
//未知对话
VideoUpdate(0, false);
SetDlgUpper(64, 0, false);
//未知对话
//未知对话
//未知对话
//未知对话
VideoUpdate(0, false);
//未知对话
//未知对话
//未知对话
RoleSetDirFrame(3, 0, 0);
VideoUpdate(0, false);
SetDlgUpper(64, 0, false);
//未知对话
//未知对话
//未知对话
VideoRestore();
//未知对话
//未知对话
VideoUpdate(0, false);
RoleSetDirFrame(2, 0, 1);
WaitEventAutoScriptRun(6, false, false);
RoleSetDirFrame(1, 0, 1);
WaitEventAutoScriptRun(2, false, false);
SetDlgLower(1, 0, false);
//未知对话
//未知对话
EventSetState(118, 9, 0);
SceneSetScript(118, "@4801", "");
SceneEnter(118);
FadeOut(0);
ReplaceAndPause();

['@4801'];
MusicPlay(Music.危机, true, false);
PartySetRole(1, 0, 0);
EventSetState(117, 3, 2);
PartySetPos(9, 113, 0);
RoleSetDirFrame(2, 0, 0);
PartyWalkToBlock(10, 111, 1, 2);
WaitEventAutoScriptRun(4, false, false);
EventSetDirFrame(117, 3, 3, 0);
VideoUpdate(0, false);
EventSetDirFrame(117, 3, 0, 0);
VideoUpdate(0, false);
SetDlgUpper(64, 0, false);
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
SetDlgUpper(64, 0, false);
//未知对话
//未知对话
//未知对话
VideoRestore();
//未知对话
//未知对话
//未知对话
VideoRestore();
//未知对话
//未知对话
VideoUpdate(0, false);
SetDlgLower(9, 0, false);
//未知对话
//未知对话
//未知对话
//未知对话
VideoRestore();
//未知对话
//未知对话
//未知对话
//未知对话
//未知对话
//未知对话
//未知对话
VideoUpdate(0, false);
SetDlgUpper(64, 0, false);
//未知对话
//未知对话
//未知对话
//未知对话
SetDlgLower(1, 0, false);
//未知对话
//未知对话
VideoUpdate(0, false);
SetDlgUpper(64, 0, false);
//未知对话
//未知对话
//未知对话
//未知对话
//未知对话
SetDlgLower(1, 0, false);
//未知对话
//未知对话
VideoUpdate(0, false);
SetDlgUpper(64, 0, false);
//未知对话
//未知对话
//未知对话
//未知对话
//未知对话
VideoRestore();
//未知对话
//未知对话
VideoRestore();
//未知对话
//未知对话
//未知对话
SetBattleMusic(Music.酒剑仙);
SetBattlefield(FbpWin.毒仙林);
BattleStart(38, "@A073", "");
MusicPlay(Music.盟誓, true, false);
BattleEnd();
RoleModifyHPMP(true, 9999);
PartySetPos(12, 109, 0);
RoleSetDirFrame(0, 0, 0);
EventModifyPos(117, 3, -80, 40);
EventSetDirFrame(117, 3, 2, 0);
VideoUpdate(0, false);
SetDlgUpper(64, 0, false);
//未知对话
//未知对话
EventSetState(117, 4, 2);
WaitEventAutoScriptRun(10, false, false);
EventSetDirFrame(117, 3, 0, 0);
WaitEventAutoScriptRun(2, false, false);
SetDlgLower(24, 0, false);
//未知对话
//未知对话
VideoUpdate(0, false);
WaitEventAutoScriptRun(8, false, false);
EventSetDirFrame(117, 3, 3, 0);
WaitEventAutoScriptRun(5, false, false);
SetDlgLower(24, 0, false);
//未知对话
//未知对话
WaitEventAutoScriptRun(2, false, false);
EventSetDirFrame(117, 3, 0, 0);
WaitEventAutoScriptRun(4, false, false);
SetDlgUpper(64, 0, false);
//未知对话
//未知对话
//未知对话
EventSetAutoScript(117, 3, "@4931");
WaitEventAutoScriptRun(4, false, false);
EventSetDirFrame(117, 4, 3, 0);
WaitEventAutoScriptRun(4, false, false);
EventSetDirFrame(117, 4, 0, 0);
WaitEventAutoScriptRun(2, false, false);
SetDlgLower(1, 0, false);
//未知对话
//未知对话
VideoUpdate(0, false);
SetDlgUpper(64, 0, false);
//未知对话
//未知对话
//未知对话
WaitEventAutoScriptRun(22, false, false);
SetDlgUpper(9, 0, false);
//未知对话
//未知对话
VideoUpdate(0, false);
SetDlgLower(24, 0, false);
//未知对话
//未知对话
//未知对话
//未知对话
VideoUpdate(0, false);
SetDlgUpper(1, 0, false);
//未知对话
//未知对话
WaitEventAutoScriptRun(4, false, false);
EventSetDirFrame(117, 4, 2, 0);
VideoUpdate(0, false);
SetDlgLower(21, 0, false);
//未知对话
//未知对话
//未知对话
//未知对话
//未知对话
VideoRestore();
//未知对话
EventSetDirFrame(117, 4, 3, 0);
VideoUpdate(0, false);
SetDlgLower(21, 0, false);
//未知对话
//未知对话
VideoUpdate(0, false);
SetDlgUpper(9, 0, false);
//未知对话
//未知对话
//未知对话
//未知对话
EventSetDirFrame(117, 4, 2, 0);
VideoUpdate(0, false);
SetDlgLower(21, 0, false);
//未知对话
//未知对话
//未知对话
VideoUpdate(0, false);
SetDlgUpper(3, 0, false);
//未知对话
//未知对话
VideoRestore();
//未知对话
//未知对话
//未知对话
EventSetDirFrame(117, 4, 2, 0);
VideoUpdate(0, false);
SetDlgLower(21, 0, false);
//未知对话
//未知对话
EventWalkOneStep(117, 4, 4, -2);
WaitEventAutoScriptRun(2, false, false);
EventWalkOneStep(117, 4, 4, -2);
WaitEventAutoScriptRun(0, false, false);
EventSetDirFrame(117, 4, 2, 0);
RoleMoveOneStep(-4, 2, 0);
WaitEventAutoScriptRun(2, false, false);
RoleMoveOneStep(-4, 2, 0);
WaitEventAutoScriptRun(2, false, false);
RoleSetDirFrame(0, 0, 0);
VideoUpdate(0, false);
SetDlgUpper(6, 0, false);
//未知对话
//未知对话
EventSetState(108, 6, 0);
EventSetState(117, 5, 2);
WaitEventAutoScriptRun(18, false, false);
SetDlgUpper(48, 0, false);
//未知对话
//未知对话
RoleMoveOneStep(8, -4, 0);
WaitEventAutoScriptRun(0, false, false);
EventWalkOneStep(117, 4, -8, 4);
WaitEventAutoScriptRun(0, false, false);
RoleSetDirFrame(2, 0, 0);
WaitEventAutoScriptRun(0, false, false);
EventSetDirFrame(117, 4, 0, 0);
WaitEventAutoScriptRun(0, false, false);
SetDlgLower(6, 0, false);
//未知对话
//未知对话
//未知对话
VideoUpdate(0, false);
SetDlgUpper(48, 0, false);
//未知对话
//未知对话
//未知对话
SetDlgLower(6, 0, false);
//未知对话
//未知对话
VideoUpdate(0, false);
SetDlgUpper(48, 0, false);
//未知对话
//未知对话
EventSetDirFrame(117, 4, 3, 0);
VideoUpdate(0, false);
EventSetDirFrame(117, 4, 2, 0);
VideoUpdate(0, false);
SetDlgLower(21, 0, false);
//未知对话
//未知对话
//未知对话
EventSetAutoScript(117, 4, "@4C99");
WaitEventAutoScriptRun(6, false, false);
RoleSetDirFrame(3, 0, 0);
WaitEventAutoScriptRun(0, false, false);
SetDlgLower(21, 0, false);
//未知对话
//未知对话
VideoUpdate(0, false);
SetDlgUpper(48, 0, false);
//未知对话
//未知对话
EventSetDirFrame(117, 4, 2, 0);
RoleSetDirFrame(2, 0, 0);
VideoUpdate(0, false);
SetDlgLower(21, 0, false);
//未知对话
//未知对话
EventSetDirFrame(117, 4, 1, 0);
VideoUpdate(0, false);
SetDlgLower(21, 0, false);
//未知对话
//未知对话
VideoUpdate(0, false);
SetDlgUpper(48, 0, false);
//未知对话
//未知对话
//未知对话
//未知对话
VideoRestore();
//未知对话
//未知对话
RoleSetDirFrame(3, 0, 0);
VideoUpdate(0, false);
SetDlgLower(6, 0, false);
//未知对话
//未知对话
//未知对话
//未知对话
VideoUpdate(0, false);
SetDlgUpper(48, 0, false);
//未知对话
//未知对话
//未知对话
EventSetAutoScript(117, 5, "@493A");
RoleSetDirFrame(2, 0, 0);
WaitEventAutoScriptRun(8, false, false);
EventSetDirFrame(117, 4, 3, 0);
WaitEventAutoScriptRun(12, false, false);
EventSetDirFrame(117, 4, 0, 0);
WaitEventAutoScriptRun(4, false, false);
RoleSetDirFrame(0, 0, 0);
WaitEventAutoScriptRun(30, false, false);
EventSetDirFrame(117, 4, 1, 0);
WaitEventAutoScriptRun(2, false, false);
SetDlgUpper(21, 0, false);
//未知对话
//未知对话
//未知对话
VideoUpdate(0, false);
SetDlgLower(1, 0, false);
//未知对话
//未知对话
//未知对话
EventSetState(117, 4, 0);
PartySetRole(3, 1, 0);
SceneSetScript(125, "@493E", "");
ReplaceAndPause();

['@4931'];
NpcMoveToBlockMutexLock(6, 115, 1, 4);
EventSetState(-1, -1, 0);

['@493A'];
NpcMoveToBlock(15, 108, 0, 3);
NpcMoveToBlock(7, 116, 0, 3);
EventSetState(-1, -1, 0);

['@493E'];
EventSetState(124, 6, 1);
EventSetDirFrame(124, 6, 0, 0);
EventSetDirFrame(124, 5, 0, 3);
PartyWalkToBlock(24, 43, 0, 2);
WaitEventAutoScriptRun(2, false, true);
RoleSetDirFrame(2, 0, 0);
MusicStop(1);
ViewportMove(8, -6, 22);
WaitEventAutoScriptRun(4, false, false);
EventSetDirFrame(124, 5, 0, 2);
WaitEventAutoScriptRun(2, false, false);
SetDlgLower(0, 0, false);
//未知对话
//未知对话
//未知对话
//未知对话
EventSetDirFrame(124, 5, 0, 6);
WaitEventAutoScriptRun(4, false, false);
EventSetDirFrame(124, 5, 0, 5);
EventSetDirFrame(124, 6, 0, 2);
WaitEventAutoScriptRun(2, false, false);
EventSetDirFrame(124, 6, 0, 3);
VideoUpdate(0, false);
PlaySound(262);
EventSetDirFrame(124, 6, 0, 4);
EventSetLayer(124, 6, 0);
VideoUpdate(0, false);
EventSetDirFrame(124, 6, 0, 5);
VideoUpdate(0, false);
EventSetDirFrame(124, 6, 0, 6);
EventSetDirFrame(124, 5, 0, 6);
VideoUpdate(0, false);
EventSetDirFrame(124, 6, 0, 7);
VideoUpdate(0, false);
//未知对话
//未知对话
EventSetDirFrame(124, 6, 0, 8);
WaitEventAutoScriptRun(4, false, false);
EventSetDirFrame(124, 6, 0, 9);
WaitEventAutoScriptRun(0, false, false);
EventSetDirFrame(124, 6, 0, 10);
WaitEventAutoScriptRun(3, false, false);
EventSetDirFrame(124, 6, 0, 11);
WaitEventAutoScriptRun(2, false, false);
EventSetDirFrame(124, 6, 0, 12);
WaitEventAutoScriptRun(2, false, false);
EventSetDirFrame(124, 6, 0, 13);
WaitEventAutoScriptRun(2, false, false);
SetDlgUpper(0, 0, false);
//未知对话
//未知对话
//未知对话
//未知对话
EventSetDirFrame(124, 6, 0, 14);
WaitEventAutoScriptRun(2, false, false);
SetDlgLower(0, 0, false);
//未知对话
//未知对话
//未知对话
//未知对话
//未知对话
VideoUpdate(0, false);
SetDlgUpper(0, 0, false);
//未知对话
//未知对话
//未知对话
//未知对话
//未知对话
VideoRestore();
//未知对话
//未知对话
VideoRestore();
//未知对话
//未知对话
VideoUpdate(0, false);
SetDlgLower(0, 0, false);
//未知对话
//未知对话
EventSetDirFrame(124, 5, 0, 6);
VideoUpdate(0, false);
SetDlgUpper(0, 0, false);
//未知对话
//未知对话
//未知对话
//未知对话
//未知对话
VideoUpdate(0, false);
SetDlgLower(0, 0, false);
//未知对话
//未知对话
//未知对话
//未知对话
VideoUpdate(0, false);
SetDlgUpper(0, 0, false);
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
SetDlgLower(0, 0, false);
//未知对话
//未知对话
//未知对话
VideoRestore();
//未知对话
//未知对话
VideoRestore();
//未知对话
//未知对话
//未知对话
VideoUpdate(0, false);
SetDlgUpper(0, 0, false);
//未知对话
//未知对话
//未知对话
VideoUpdate(0, false);
SetDlgLower(0, 0, false);
//未知对话
//未知对话
VideoUpdate(0, false);
SetDlgUpper(0, 0, false);
//未知对话
//未知对话
//未知对话
VideoRestore();
//未知对话
VideoUpdate(0, false);
EventSetDirFrame(124, 6, 0, 15);
VideoUpdate(0, false);
EventModifyPos(124, 6, 0, -3);
VideoUpdate(0, false);
EventModifyPos(124, 6, 0, -4);
VideoUpdate(0, false);
EventModifyPos(124, 6, 0, -4);
VideoUpdate(0, false);
EventModifyPos(124, 6, 0, -1);
VideoUpdate(0, false);
EventSetDirFrame(124, 5, 0, 8);
SetDlgUpper(0, 0, false);
//未知对话
//未知对话
VideoUpdate(0, false);
EventSetDirFrame(124, 6, 0, 16);
WaitEventAutoScriptRun(0, false, false);
PlaySound(141);
EventSetDirFrame(124, 6, 0, 17);
WaitEventAutoScriptRun(2, false, false);
EventSetDirFrame(124, 6, 0, 18);
WaitEventAutoScriptRun(2, false, false);
EventSetDirFrame(124, 6, 0, 19);
WaitEventAutoScriptRun(2, false, false);
EventSetDirFrame(124, 6, 0, 20);
WaitEventAutoScriptRun(2, false, false);
EventSetDirFrame(124, 6, 0, 21);
WaitEventAutoScriptRun(2, false, false);
EventSetDirFrame(124, 6, 0, 15);
VideoUpdate(0, false);
SetDlgUpper(0, 0, false);
//未知对话
//未知对话
EventSetDirFrame(124, 5, 0, 9);
VideoUpdate(0, false);
PlaySound(93);
WaitEventAutoScriptRun(6, false, false);
EventSetDirFrame(124, 6, 0, 22);
VideoUpdate(0, false);
SetDlgLower(48, 0, false);
//未知对话
//未知对话
//未知对话
VideoUpdate(0, false);
EventSetState(124, 6, 0);
EventSetState(124, 3, 1);
EventSetAutoScript(124, 3, "@4A06");
WaitEventAutoScriptRun(60, false, false);
PartySetPos(21, 37, 0);
ViewportMove(0, 0, 0);
WaitEventAutoScriptRun(28, false, false);
SetDlgUpper(0, 0, false);
//未知对话
//未知对话
PartyWalkToBlock(21, 36, 1, 4);
PartyWalkToBlock(22, 35, 1, 4);
PartyWalkToBlock(25, 38, 0, 4);
RoleSetDirFrame(0, 0, 0);
RoleSetDirFrame(3, 0, 1);
WaitEventAutoScriptRun(4, false, false);
RoleSetDirFrame(2, 0, 0);
VideoUpdate(0, false);
SetDlgUpper(24, 0, false);
//未知对话
//未知对话
EventSetTriggerScript(124, 5, "@4A19");
ReplaceAndPause();

['@4A06'];
NpcMoveToBlockMutexLock(28, 35, 0, 2);
ReplaceAndPause();
NpcSetDirFrame(2, 0);
ReplaceAndPause();
EventSetDirFrame(124, 5, 0, 0);
WaitEventAutoScriptRun(6, false, false);
EventModifyPos(-1, -1, 0, 2);
EventModifyPos(-1, -1, 0, 2);
EventModifyPos(-1, -1, 0, 4);
EventModifyPos(-1, -1, 0, 4);
EventModifyPos(-1, -1, 0, 2);
EventModifyPos(-1, -1, 0, 2);
WaitEventAutoScriptRun(4, false, false);
NpcSetDirFrame(1, 0);
NpcSetDirFrame(0, 0);
NpcMoveToBlock(23, 41, 0, 3);
NpcMoveToBlock(27, 45, 0, 3);
EventSetState(-1, -1, 0);

['@4A19'];
SetDlgCenter(0, false);
//未知对话
EventSetState(-1, -1, 0);
SceneEnter(126);
FadeOut(0);

['@4A69'];
NpcMoveToBlock(28, 35, 1, 3);
NpcMoveToBlock(23, 41, 0, 3);
NpcMoveToBlock(27, 45, 0, 3);
EventSetState(-1, -1, 0);

['@4AFF'];
//未知对话
//未知对话
//未知对话
ReplaceAndPause();
//未知对话
//未知对话
//未知对话
//未知对话
ReplaceAndPause();
//未知对话
//未知对话

['@4B0B'];
//未知对话
//未知对话

['@4B0E'];
NpcMoveToBlock(22, 92, 0, 3);
NpcMoveToBlock(21, 92, 1, 3);

['@4B1A'];
NpcMoveToBlock(21, 92, 0, 3);
NpcSetDirFrame(3, 0);

['@4B1D'];
NpcMoveToBlock(22, 93, 0, 3);
NpcSetDirFrame(1, 0);

['@4B20'];
WaitEventAutoScriptRun(2, false, false);
NpcMoveToBlockMutexLock(22, 93, 0, 4);
NpcMoveToBlockMutexLock(17, 98, 0, 4);
EventSetState(-1, -1, 0);

['@4B25'];
WaitEventAutoScriptRun(4, false, false);
NpcMoveToBlockMutexLock(22, 93, 0, 4);
['@4B27'];
NpcMoveToBlockMutexLock(17, 98, 0, 4);
EventSetState(-1, -1, 0);

['@4B2A'];
NpcMoveToBlockMutexLock(22, 92, 0, 4);

['@4B2C'];
WaitEventAutoScriptRun(9, false, false);
NpcSetDirFrame(2, 0);
WaitEventAutoScriptRun(7, false, false);
NpcMoveToBlockMutexLock(22, 91, 1, 2);
NpcMoveToBlockMutexLock(16, 85, 1, 2);
NpcMoveToBlockMutexLock(22, 80, 0, 2);
NpcMoveToBlockMutexLock(21, 79, 0, 2);
NpcSetDirFrame(2, 0);

['@4B6A'];
VideoUpdate(0, false);
//未知对话
//未知对话
['@4B6D'];
ReplaceAndPauseWithNop("@4B96", 0);

['@4B6F'];
//未知对话
//未知对话
//未知对话
VideoRestore();
//未知对话
//未知对话
//未知对话
//未知对话
VideoRestore();
//未知对话
//未知对话
//未知对话
VideoUpdate(0, false);
SetDlgLower(21, 0, false);
//未知对话
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
SetDlgLower(21, 0, false);
//未知对话
//未知对话
VideoUpdate(0, false);
SetDlgUpper(0, 0, false);
//未知对话
//未知对话
//未知对话
//未知对话
VideoRestore();
//未知对话
//未知对话
//未知对话
VideoUpdate(0, false);
['@4B96'];
//未知对话
//未知对话
GotoWithSelect("@4B6D");
CashModify(-15000, "@4B6A");
VideoUpdate(0, false);
//未知对话
//未知对话
EventSetState(-1, -1, 0);
SceneSetScript(120, "@4BA4", "");
SceneEnter(120);
MusicStop(0);
FadeOut(0);
MusicPlay(Music.宿命, true, false);

['@4BA4'];
EventSetState(119, 3, 0);
EventSetState(119, 4, 0);
EventSetState(119, 5, 2);
EventSetState(119, 6, 2);
EventSetState(108, 8, 0);
EventSetState(119, 7, 2);
EventSetState(119, 8, 1);
EventSetState(119, 9, 1);
PartySetPos(16, 40, 0);
PartySetRole(3, 0, 0);
RoleSetDirFrame(1, 0, 0);
VideoUpdate(0, false);
SetDlgLower(0, 0, false);
//未知对话
//未知对话
EventSetDirFrame(119, 9, 0, 0);
WaitEventAutoScriptRun(6, false, false);
EventSetDirFrame(119, 9, 3, 0);
VideoUpdate(0, false);
//未知对话
//未知对话
//未知对话
//未知对话
VideoUpdate(0, false);
SetDlgLower(24, 0, false);
//未知对话
//未知对话
VideoUpdate(0, false);
//未知对话
//未知对话
//未知对话
VideoRestore();
//未知对话
//未知对话
//未知对话
VideoRestore();
//未知对话
//未知对话
VideoUpdate(0, false);
//未知对话
//未知对话
//未知对话
EventSetDirFrame(119, 9, 0, 0);
VideoUpdate(0, false);
//未知对话
//未知对话
//未知对话
//未知对话
//未知对话
VideoRestore();
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
//未知对话
//未知对话
//未知对话
//未知对话
//未知对话
VideoRestore();
//未知对话
//未知对话
//未知对话
VideoUpdate(0, false);
//未知对话
//未知对话
//未知对话
//未知对话
EventSetState(119, 5, 0);
EventSetState(119, 6, 0);
EventSetState(119, 7, 0);
EventSetState(119, 8, 0);
EventSetState(119, 9, 0);
SceneEnter(127);
FadeOut(0);

['@4C99'];
EventWalkOneStep(-1, -1, 8, 0);
EventWalkOneStep(-1, -1, 8, 0);
EventWalkOneStep(-1, -1, 8, 0);
EventWalkOneStep(-1, -1, 8, 0);
EventWalkOneStep(-1, -1, 8, -4);
EventWalkOneStep(-1, -1, 8, -4);
NpcSetDirFrame(1, 0);

['@4CAD'];
NpcSetFrame(3);
NpcSetFrame(4);
NpcSetFrame(5);
ReplaceAndPause();
NpcSetFrame(6);
NpcSetFrame(7);
NpcSetFrame(8);
NpcSetFrame(9);
NpcSetFrame(10);
NpcSetFrame(11);
NpcSetFrame(12);

['@4CB9'];
NpcSetFrame(23);
NpcSetFrame(24);
NpcSetFrame(25);
NpcSetFrame(26);
NpcSetFrame(27);
NpcSetFrame(28);
NpcSetFrame(29);
NpcSetFrame(30);
NpcSetFrame(31);
NpcSetFrame(32);
NpcSetFrame(33);
NpcSetFrame(34);
ReplaceAndPause();
NpcSetFrame(35);
ReplaceAndPause();
EventSetState(-1, -1, 0);

['@4CCD'];
NpcMoveToBlock(28, 35, 0, 3);
NpcMoveToBlock(26, 36, 1, 3);

['@4CD0'];
NpcMoveToBlock(22, 40, 1, 3);
NpcMoveToBlock(26, 44, 1, 3);
EventSetState(-1, -1, 0);

['@4CE9'];
NpcSetFrame(4);
EventModifyPos(-1, -1, 10, -6);

['@4CEC'];
NpcSetFrame(5);
EventModifyPos(-1, -1, 10, -6);

['@4CEF'];
VideoWave(2, 0);
EventSetState(108, 12, 1);
PartyWalkToBlock(28, 70, 0, 2);
WaitEventAutoScriptRun(10, false, false);
RoleSetDirFrame(1, 0, 0);
WaitEventAutoScriptRun(5, false, false);
RoleSetDirFrame(2, 0, 0);
EventSetState(108, 12, 0);
WaitEventAutoScriptRun(2, false, false);
RoleSetDirFrame(2, 0, 1);
WaitEventAutoScriptRun(6, false, false);
RoleSetDirFrame(3, 0, 1);
RoleSetDirFrame(1, 0, 0);
WaitEventAutoScriptRun(2, false, false);
SetDlgLower(24, 0, false);
//未知对话
//未知对话
RoleSetDirFrame(2, 0, 1);
VideoUpdate(0, false);
SetDlgLower(1, 0, false);
//未知对话
//未知对话
RoleSetDirFrame(3, 0, 1);
VideoUpdate(0, false);
SetDlgLower(1, 0, false);
//未知对话
//未知对话
RoleSetDirFrame(0, 0, 0);
WaitEventAutoScriptRun(10, false, false);
RoleSetDirFrame(3, 0, 0);
WaitEventAutoScriptRun(8, false, false);
SetDlgLower(24, 0, false);
//未知对话
//未知对话
//未知对话
PartyWalkToBlock(29, 71, 0, 2);
WaitEventAutoScriptRun(5, false, false);
PartyWalkToBlock(28, 71, 1, 2);
WaitEventAutoScriptRun(6, false, false);
RoleSetDirFrame(3, 0, 0);
WaitEventAutoScriptRun(4, false, false);
SetDlgLower(24, 0, false);
//未知对话
//未知对话
//未知对话
VideoUpdate(0, false);
SetDlgLower(5, 0, false);
//未知对话
//未知对话
VideoRestore();
//未知对话
//未知对话
EventSetState(114, 11, 2);
EventSetState(115, 0, 2);
EventSetState(116, 0, 2);
EventSetState(118, 11, 2);
EventSetState(122, 0, 2);
EventSetState(108, 13, 2);
EventSetState(108, 14, 2);
EventSetState(119, 11, 2);
EventSetState(119, 12, 2);
EventSetState(119, 13, 2);
EventSetState(108, 4, 0);
EventSetState(108, 5, 0);
EventSetState(114, 9, 0);
EventSetState(114, 10, 0);
EventSetState(1, 0, 0);
EventSetState(117, 0, 0);
EventSetState(118, 5, 0);
EventSetState(118, 6, 0);
EventSetState(118, 7, 0);
EventSetState(121, 3, 0);
EventSetState(119, 2, 0);
EventSetState(100, 38, 1);
EventSetState(100, 32, 0);
EventSetState(1, 0, 0);
EventSetState(100, 14, 0);
EventSetState(100, 15, 0);
EventSetState(100, 16, 0);
EventSetState(100, 35, 2);
EventSetState(100, 36, 2);
EventSetState(100, 37, 2);
EventSetState(1, 0, 2);
EventSetState(100, 1, 0);
EventSetState(100, 2, 0);
EventSetTriggerScript(100, 12, "@4D91");
EventSetTriggerScript(100, 13, "@4D99");
SceneSetScript(115, "@4D50", "");
SceneSetScript(116, "@4D50", "");
SceneSetScript(119, "@4D50", "");
SceneSetScript(120, "@4D50", "");
SceneSetScript(122, "@4D50", "");
SceneSetScript(117, "@4D50", "");
SceneSetScript(123, "@4D50", "");
SceneSetScript(124, "@4D50", "");
SceneSetScript(125, "@4D50", "");
ReplaceAndPause();
['@4D50'];
VideoWave(2, 0);
MusicPlay(Music.宿命, true, false);

['@4D75'];
VideoUpdate(0, false);
//未知对话
//未知对话
ReplaceAndPause();
['Event_00101_00018_Trigger'];
//未知对话
//未知对话
//未知对话
GotoWithSelect("@4D75");
VideoUpdate(0, false);
//未知对话
//未知对话
//未知对话
//未知对话
VideoUpdate(0, false);
AddItem(227, 0);
SetDlgBox(0);
//未知对话
VideoUpdate(0, false);
SetDlgUpper(0, 0, false);
//未知对话
//未知对话
//未知对话
ReplaceAndPause();
//未知对话
//未知对话
//未知对话
//未知对话

['@4D91'];
//未知对话
//未知对话
//未知对话
//未知对话
VideoRestore();
//未知对话
//未知对话

['@4D99'];
//未知对话
//未知对话
//未知对话
ReplaceAndPause();
['@4D9D'];
//未知对话
//未知对话
//未知对话

['@4DA7'];
EventSetTriggerMode(-1, -1, false, 1);
VideoUpdate(0, false);
SetDlgUpper(76, 0, false);
//未知对话
//未知对话
VideoRestore();
//未知对话
//未知对话
//未知对话
GotoWithSelect("@4DCD");
VideoUpdate(0, false);
SetDlgUpper(76, 0, false);
//未知对话
//未知对话
//未知对话
//未知对话
VideoUpdate(0, false);
SetDlgLower(1, 0, false);
//未知对话
//未知对话
VideoUpdate(0, false);
SetDlgUpper(76, 0, false);
//未知对话
//未知对话
//未知对话
//未知对话
//未知对话
AddItem(228, 0);
ReplaceAndPause();
SetDlgUpper(76, 0, false);
//未知对话
//未知对话
//未知对话
//未知对话
VideoRestore();
//未知对话
//未知对话

['@4DCD'];
VideoUpdate(0, false);
SetDlgUpper(76, 0, false);
//未知对话
//未知对话
//未知对话

['@4DD3'];
EventSetTriggerMode(-1, -1, false, 1);
VideoUpdate(0, false);
EventSetState(100, 14, 0);
EventSetState(100, 15, 2);
//未知对话
//未知对话
SetDlgLower(1, 0, false);
//未知对话
//未知对话
//未知对话
VideoUpdate(0, false);
SetDlgUpper(0, 0, false);
//未知对话
//未知对话
ReplaceAndPause();
//未知对话
//未知对话
//未知对话

['@4DE6'];
EventSetTriggerMode(-1, -1, false, 1);
VideoUpdate(0, false);
//未知对话
//未知对话
//未知对话
//未知对话
VideoUpdate(0, false);
SetDlgLower(6, 0, false);
//未知对话
//未知对话
//未知对话
//未知对话
VideoUpdate(0, false);
SetDlgUpper(0, 0, false);
//未知对话
//未知对话
//未知对话
//未知对话
EventSetTriggerScript(118, 6, "@4DFE");
ReplaceAndPause();
//未知对话
//未知对话
//未知对话

['@4DFE'];
SetDlgUpper(76, 0, false);
//未知对话
//未知对话
//未知对话
VideoRestore();
//未知对话
//未知对话
//未知对话
//未知对话
ReplaceAndPause();
SetDlgUpper(76, 0, false);
//未知对话
//未知对话
//未知对话
//未知对话

['@4E2D'];
//未知对话
//未知对话
//未知对话
VideoUpdate(0, false);
SetDlgLower(10, 0, false);
//未知对话
//未知对话
SetDlgUpper(0, 0, false);
//未知对话
//未知对话
VideoUpdate(0, false);
SetDlgLower(10, 0, false);
//未知对话
//未知对话
ReplaceAndPauseWithNop("Event_00133_00019_Trigger", 0);

['@4F0C'];
WaitEventAutoScriptRun(5, false, false);
NpcMoveToBlock(22, 39, 0, 3);
NpcMoveToBlock(13, 30, 0, 3);
NpcMoveToBlock(17, 26, 0, 3);
NpcMoveToBlock(13, 22, 0, 3);
NpcMoveToBlock(15, 20, 0, 3);
NpcMoveToBlock(11, 16, 1, 3);
EventSetState(-1, -1, 0);

['@4F83'];
VideoUpdate(0, false);
SetDlgLower(22, 0, false);
//未知对话
//未知对话
ReplaceAndPause();
['Event_00101_00038_Trigger'];
SetDlgCenter(0, false);
//未知对话
//未知对话
GotoWithSelect("@4F83");
VideoUpdate(0, false);
SetDlgLower(1, 0, false);
//未知对话
//未知对话
//未知对话
FadeOut(0);
EventModifyPos(100, 35, 0, -48);
EventModifyPos(-1, -1, 16, -56);
EventSetState(100, 36, 0);
EventSetState(100, 37, 0);
EventSetState(100, 15, 2);
EventSetState(100, 16, 2);
PartySetRole(1, 3, 0);
PartySetPos(12, 23, 0);
RoleSetDirFrame(0, 0, 0);
WaitEventAutoScriptRun(10, false, false);
EventSetState(-1, -1, 0);
EventSetState(100, 39, 2);
VideoUpdate(0, false);
SetDlgLower(0, 0, false);
//未知对话
//未知对话
//未知对话
VideoUpdate(0, false);
//未知对话
//未知对话
EventSetAutoScript(100, 35, "@5028");
WaitEventAutoScriptRun(8, false, false);
EventSetDirFrame(100, 39, 0, 0);
WaitEventAutoScriptRun(5, false, false);
EventSetDirFrame(100, 39, 1, 0);
WaitEventAutoScriptRun(6, false, false);
EventSetDirFrame(100, 39, 0, 0);
WaitEventAutoScriptRun(4, false, false);
EventSetDirFrame(100, 39, 3, 0);
WaitEventAutoScriptRun(2, false, false);
SetDlgLower(37, 0, false);
//未知对话
//未知对话
//未知对话
PartyWalkToBlock(11, 23, 1, 2);
SetDlgLower(2, 0, false);
//未知对话
//未知对话
VideoUpdate(0, false);
EventSetDirFrame(100, 39, 2, 0);
WaitEventAutoScriptRun(5, false, false);
SetDlgLower(37, 0, false);
//未知对话
//未知对话
VideoUpdate(0, false);
SetDlgLower(3, 0, false);
//未知对话
//未知对话
//未知对话
VideoUpdate(0, false);
SetDlgLower(37, 0, false);
//未知对话
//未知对话
//未知对话
//未知对话
//未知对话
VideoUpdate(0, false);
SetDlgLower(3, 0, false);
//未知对话
//未知对话
//未知对话
//未知对话
VideoUpdate(0, false);
SetDlgLower(37, 0, false);
//未知对话
//未知对话
VideoUpdate(0, false);
SetDlgUpper(21, 0, false);
//未知对话
//未知对话
//未知对话
VideoUpdate(0, false);
SetDlgLower(37, 0, false);
//未知对话
//未知对话
//未知对话
//未知对话
VideoUpdate(0, false);
SetDlgLower(5, 0, false);
//未知对话
//未知对话
VideoUpdate(0, false);
SetDlgLower(37, 0, false);
//未知对话
//未知对话
//未知对话
//未知对话
//未知对话
VideoUpdate(0, false);
SetDlgUpper(24, 0, false);
//未知对话
//未知对话
//未知对话
//未知对话
RoleSetDirFrame(2, 0, 0);
VideoUpdate(0, false);
SetDlgLower(5, 0, false);
//未知对话
//未知对话
WaitEventAutoScriptRun(8, false, false);
SetDlgLower(37, 0, false);
//未知对话
//未知对话
EventSetDirFrame(100, 39, 1, 0);
RoleSetDirFrame(0, 0, 0);
VideoUpdate(0, false);
SetDlgLower(37, 0, false);
//未知对话
//未知对话
//未知对话
VideoUpdate(0, false);
SetDlgUpper(21, 0, false);
//未知对话
//未知对话
EventSetDirFrame(100, 39, 2, 0);
VideoUpdate(0, false);
SetDlgLower(37, 0, false);
//未知对话
//未知对话
//未知对话
//未知对话
//未知对话
VideoUpdate(0, false);
SetDlgLower(3, 0, false);
//未知对话
//未知对话
VideoUpdate(0, false);
SetDlgUpper(37, 0, false);
//未知对话
//未知对话
VideoUpdate(0, false);
SetDlgLower(1, 0, false);
//未知对话
//未知对话
//未知对话
//未知对话
VideoUpdate(0, false);
SetDlgUpper(37, 0, false);
//未知对话
//未知对话
//未知对话
VideoRestore();
//未知对话
//未知对话
//未知对话
VideoRestore();
//未知对话
//未知对话
//未知对话

['@5028'];
NpcMoveToBlock(16, 30, 0, 3);
EventSetState(-1, -1, 0);

['@503E'];
//未知对话
//未知对话
ReplaceAndPauseWithNop("Event_00101_00039_Trigger", 0);

['@5042'];
//未知对话
//未知对话
//未知对话
ReplaceAndPauseWithNop("Event_00101_00039_Trigger", 0);

['@5047'];
EventSetStateSequence(115, 3, 115, 11, 2);
EventSetState(115, 12, 2);
EventSetState(115, 13, 2);
PartySetPos(34, 32, 1);
RoleSetDirFrame(3, 0, 0);
RoleSetDirFrame(3, 0, 1);
PartySetRole(1, 0, 0);
ReplaceAndPause();

['@5050'];
SetDlgCenter(0, false);
//未知对话
RoleMoveOneStep(-16, -8, 0);

['@50D9'];
MusicPlay(Music.宿命, true, false);

['@50DB'];
NpcSetFrame(1);
ReplaceAndPause();
NpcSetFrame(2);
ReplaceAndPause();
NpcSetFrame(3);
ReplaceAndPause();
NpcSetFrame(4);
WaitEventAutoScriptRun(7, false, false);
['@50E3'];
NpcSetFrame(5);
ReplaceAndPause();
NpcSetFrame(4);
WaitEventAutoScriptRun(8, false, false);
ReplaceAndPauseWithNop("@50E3", 0);

['@50E9'];
NpcSetDirFrame(0, 11);
WaitEventAutoScriptRun(5, false, false);
NpcSetDirFrame(0, 12);
WaitEventAutoScriptRun(7, false, false);
NpcSetDirFrame(0, 13);
WaitEventAutoScriptRun(4, false, false);
NpcSetDirFrame(0, 14);
WaitEventAutoScriptRun(2, false, false);
NpcSetDirFrame(0, 15);
WaitEventAutoScriptRun(2, false, false);
NpcSetDirFrame(0, 16);
WaitEventAutoScriptRun(5, false, false);
NpcSetDirFrame(0, 17);
WaitEventAutoScriptRun(3, false, false);
NpcSetDirFrame(0, 18);
WaitEventAutoScriptRun(2, false, false);
NpcSetDirFrame(0, 19);
WaitEventAutoScriptRun(4, false, false);
NpcSetDirFrame(0, 12);
WaitEventAutoScriptRun(0, false, false);
NpcSetDirFrame(0, 15);
WaitEventAutoScriptRun(2, false, false);
NpcSetDirFrame(0, 17);
WaitEventAutoScriptRun(0, false, false);
NpcSetDirFrame(0, 19);
WaitEventAutoScriptRun(0, false, false);
NpcSetDirFrame(0, 18);
WaitEventAutoScriptRun(6, false, false);
NpcSetDirFrame(0, 16);
WaitEventAutoScriptRun(0, false, false);
NpcSetDirFrame(0, 15);
WaitEventAutoScriptRun(2, false, false);
NpcSetDirFrame(0, 13);
WaitEventAutoScriptRun(2, false, false);
NpcSetDirFrame(0, 22);
WaitEventAutoScriptRun(5, false, false);

['@510E'];
NpcSetDirFrame(0, 22);
WaitEventAutoScriptRun(2, false, false);
NpcSetDirFrame(0, 20);
WaitEventAutoScriptRun(0, false, false);
NpcSetDirFrame(0, 19);
WaitEventAutoScriptRun(0, false, false);
NpcSetDirFrame(0, 18);
WaitEventAutoScriptRun(5, false, false);
NpcSetDirFrame(0, 19);
WaitEventAutoScriptRun(2, false, false);
NpcSetDirFrame(0, 20);
WaitEventAutoScriptRun(8, false, false);
NpcSetDirFrame(0, 19);
WaitEventAutoScriptRun(3, false, false);
NpcSetDirFrame(0, 20);
WaitEventAutoScriptRun(3, false, false);
NpcSetDirFrame(0, 19);
WaitEventAutoScriptRun(3, false, false);
NpcSetDirFrame(0, 20);
WaitEventAutoScriptRun(3, false, false);
NpcSetDirFrame(0, 19);
WaitEventAutoScriptRun(6, false, false);
NpcSetDirFrame(0, 21);
WaitEventAutoScriptRun(2, false, false);
NpcSetDirFrame(0, 19);
WaitEventAutoScriptRun(6, false, false);

['@5129'];
NpcMoveToBlock(33, 34, 0, 3);
NpcMoveToBlock(34, 35, 1, 3);
NpcSetDirFrame(2, 0);
ReplaceAndPause();
NpcMoveToBlock(29, 40, 1, 3);
EventSetState(-1, -1, 0);

['@52B2'];
SceneEnter(110);
PartySetPos(52, 32, 1);
FadeOut(0);

['@52E4'];
VideoUpdate(0, false);
SetDlgLower(9, 0, false);
//未知对话
//未知对话
//未知对话
ReplaceAndPause();
SetDlgUpper(0, 0, false);
//未知对话
//未知对话
ReplaceAndPause();
SetDlgUpper(0, 0, false);
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
//未知对话
VideoUpdate(0, false);
SetDlgUpper(0, 0, false);
//未知对话
//未知对话
VideoUpdate(0, false);
SetDlgLower(9, 0, false);
//未知对话
//未知对话
VideoUpdate(0, false);
SetDlgUpper(0, 0, false);
//未知对话
//未知对话
VideoUpdate(0, false);
SetDlgLower(1, 0, false);
//未知对话
//未知对话
VideoUpdate(0, false);
SetDlgBox(0);
//未知对话
CashModify(1500, "");
EventSetState(-1, -1, 0);
PartySetFollower(83, 0);

['@537B'];
NpcSetDirFrame(3, 0);
NpcSetDirFrame(2, 0);
NpcMoveToBlockMutexLock(29, 53, 1, 4);

['@537F'];
NpcSetDirFrame(2, 0);
NpcMoveToBlockMutexLock(30, 52, 1, 4);
EventSetState(-1, -1, 0);

SetBattlefield(FbpWin.将军冢_阴森所在);
BattleStart(36, "@A073", "");
NpcSetFrame(1);
PartySetPos(19, 22, 1);
SetBattlefield(FbpWin.蛤蟆洞_前段);
ReplaceAndPause();
NpcSetFrame(2);
VideoUpdate(0, false);
AddItem(202, 0);
SetDlgCenter(0, false);
//未知对话
ReplaceAndPause();
SetDlgCenter(0, false);
//未知对话

['@53EC'];
MusicPlay(Music.神木林, true, false);
EventSetState(103, 6, 2);
EventModifyPos(103, 5, 32, 0);
EventSetTriggerScript(103, 5, "@540B");
EventSetDirFrame(103, 5, 0, 0);
VideoUpdate(0, false);
RoleMoveOneStep(-16, 8, 0);
VideoUpdate(0, false);
RoleMoveOneStep(-16, 8, 0);
RoleSetDirFrame(0, 0, 1);
VideoUpdate(0, false);
SetDlgUpper(25, 0, false);
//未知对话
//未知对话
RoleSetDirFrame(3, 0, 0);
VideoUpdate(0, false);
RoleSetDirFrame(2, 0, 0);
VideoUpdate(0, false);
SetDlgUpper(22, 0, false);
//未知对话
//未知对话
//未知对话
//未知对话
//未知对话
SetDlgLower(1, 0, false);
//未知对话
//未知对话
Replace();
['Scene_00102_Enter'];
SetBattlefield(FbpWin.蛤蟆山_后段);
MusicPlay(Music.神木林, true, false);

['@540B'];
SetDlgLower(23, 0, false);
//未知对话
//未知对话
VideoUpdate(0, true);
SetDlgLower(2, 0, false);
//未知对话
//未知对话
//未知对话
VideoUpdate(0, false);
SetDlgUpper(84, 0, false);
//未知对话
//未知对话
VideoRestore();
//未知对话
//未知对话
SetDlgLower(24, 0, false);
//未知对话
//未知对话
VideoUpdate(0, false);
SetDlgUpper(84, 0, false);
//未知对话
//未知对话
//未知对话
NpcSetDirFrame(0, 0);
VideoUpdate(0, false);
SetDlgUpper(84, 0, false);
//未知对话
//未知对话
//未知对话
NpcSetDirFrame(3, 0);
VideoUpdate(0, false);
EventSetState(-1, -1, 0);
EventSetDirFrame(103, 6, 0, 1);
EventSetStateSequence(103, 7, 103, 14, 2);
BattleStart(36, "@A073", "");
MusicPlay(Music.险境_2, true, false);

['@5587'];
NpcMoveToBlockMutexLock(41, 74, 1, 2);
EventSetState(138, 3, 0);

['@5666'];
EventModifyPos(-1, -1, 0, -1);
GotoWithNop("@5666", 0);

['@56AF'];
NpcMoveToBlock(42, 24, 0, 3);

['@56B8'];
EventWalkOneStep(-1, -1, 6, 3);
EventWalkOneStep(-1, -1, 4, 2);
EventWalkOneStep(-1, -1, 1, 1);
EventWalkOneStep(-1, -1, 1, 1);
EventWalkOneStep(-1, -1, 1, 1);
EventAnimate(0);
NpcSetDirFrame(3, 0);
EventAnimate(0);
EventAnimate(0);
EventAnimate(0);
EventAnimate(0);
EventAnimate(0);
EventAnimate(0);
EventAnimate(0);
EventAnimate(0);
EventAnimate(0);
EventAnimate(0);
EventWalkOneStep(-1, -1, 2, 1);
EventWalkOneStep(-1, -1, 4, 2);
EventWalkOneStep(-1, -1, 6, 3);
['@56CC'];
EventWalkOneStep(-1, -1, 8, 4);
GotoWithNop("@56CC", 0);

['@5745'];
ReplaceAndPause();
NpcSetFrame(1);
WaitEventAutoScriptRun(2, false, false);
NpcSetFrame(2);
WaitEventAutoScriptRun(2, false, false);
NpcSetFrame(3);
WaitEventAutoScriptRun(7, false, false);
NpcSetFrame(4);
ReplaceAndPause();
NpcSetFrame(5);
ReplaceAndPause();
NpcSetFrame(6);
ReplaceAndPause();
NpcSetFrame(7);
WaitEventAutoScriptRun(6, false, false);
NpcSetFrame(6);
WaitEventAutoScriptRun(2, false, false);
NpcSetFrame(5);
WaitEventAutoScriptRun(2, false, false);
NpcSetFrame(4);
WaitEventAutoScriptRun(5, false, false);
NpcSetFrame(3);
ReplaceAndPause();
NpcSetFrame(2);
ReplaceAndPause();
NpcSetFrame(1);
ReplaceAndPause();
NpcSetFrame(0);

['@580F'];
NpcMoveToBlockMutexLock(37, 95, 0, 4);
EventSetState(-1, -1, 0);

['@5822'];
NpcMoveToBlockMutexLock(50, 82, 0, 4);
EventSetState(-1, -1, 0);

['@5847'];
SceneEnter(153);
PartySetPos(14, 72, 1);
FadeOut(0);

['@5877'];
//未知对话
//未知对话
//未知对话
Replace();
SceneEnter(162);
PartySetPos(14, 108, 1);
FadeOut(0);

['@59E1'];
//未知对话
//未知对话
//未知对话

['@59E5'];
//未知对话
//未知对话
//未知对话

['@59E9'];
NpcMoveToBlockMutexLock(27, 71, 0, 4);
EventSetState(160, 5, 2);
EventSetState(-1, -1, 0);

['@59EF'];
EventSetTriggerMode(-1, -1, false, -1);
NpcSetDirFrame(0, 0);
PartySetPos(33, 78, 1);
RoleSetDirFrame(2, 0, 0);
RoleSetDirFrame(2, 0, 1);
EventSetTriggerScript(158, 2, "@5877");
VideoUpdate(0, false);
SetDlgUpper(7, 0, false);
//未知对话
//未知对话
VideoUpdate(0, false);
SetDlgLower(63, 0, false);
//未知对话
//未知对话
//未知对话
VideoUpdate(0, false);
SetDlgUpper(7, 0, false);
//未知对话
//未知对话
//未知对话
//未知对话
VideoUpdate(0, false);
SetDlgLower(63, 0, false);
//未知对话
//未知对话
VideoUpdate(0, false);
SetDlgUpper(5, 0, false);
//未知对话
//未知对话
SetDlgLower(63, 0, false);
//未知对话
//未知对话
VideoUpdate(0, false);
SetDlgUpper(5, 0, false);
//未知对话
//未知对话
VideoRestore();
//未知对话
//未知对话
//未知对话
VideoUpdate(0, false);
SetDlgLower(63, 0, false);
//未知对话
//未知对话
//未知对话
VideoRestore();
//未知对话
//未知对话
//未知对话
//未知对话
VideoUpdate(0, false);
SetDlgUpper(5, 0, false);
//未知对话
//未知对话
//未知对话
EventSetDirFrame(159, 2, 3, 0);
VideoUpdate(0, false);
SetDlgLower(63, 0, false);
//未知对话
//未知对话
//未知对话
//未知对话
VideoUpdate(0, false);
SetDlgUpper(5, 0, false);
//未知对话
//未知对话
SetDlgLower(63, 0, false);
//未知对话
//未知对话
VideoUpdate(0, false);
SetDlgLower(37, 0, false);
//未知对话
//未知对话
//未知对话
VideoUpdate(0, false);
SetDlgUpper(5, 0, false);
//未知对话
//未知对话
VideoUpdate(0, false);
SetDlgLower(63, 0, false);
//未知对话
//未知对话
EventSetDirFrame(159, 1, 2, 0);
VideoUpdate(0, false);
SetDlgLower(63, 0, false);
//未知对话
//未知对话
//未知对话
//未知对话
EventSetAutoScript(159, 1, "@59E9");
WaitEventAutoScriptRun(20, false, false);
EventSetDirFrame(159, 2, 2, 0);
WaitEventAutoScriptRun(4, false, false);
EventSetDirFrame(159, 2, 1, 0);
WaitEventAutoScriptRun(12, false, false);
EventSetDirFrame(159, 2, 3, 0);
WaitEventAutoScriptRun(8, false, false);
SetDlgLower(37, 0, false);
//未知对话
//未知对话
RoleSetDirFrame(1, 0, 0);
VideoUpdate(0, false);
SetDlgUpper(5, 0, false);
//未知对话
//未知对话
VideoUpdate(0, false);
SetDlgLower(37, 0, false);
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
SetDlgUpper(7, 0, false);
//未知对话
//未知对话
//未知对话
VideoUpdate(0, false);
SetDlgLower(37, 0, false);
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
SetDlgUpper(7, 0, false);
//未知对话
//未知对话
//未知对话
VideoUpdate(0, false);
SetDlgLower(24, 0, false);
//未知对话
//未知对话
//未知对话
//未知对话
VideoUpdate(0, false);
SetDlgUpper(5, 0, false);
//未知对话
//未知对话
//未知对话
//未知对话
WaitEventAutoScriptRun(8, false, false);
SetDlgCenter(0, false);
//未知对话
WaitEventAutoScriptRun(10, false, false);
EventSetDirFrame(159, 2, 0, 0);
VideoUpdate(0, false);
SetDlgLower(37, 0, false);
//未知对话
//未知对话
VideoRestore();
//未知对话
EventSetState(159, 2, 0);
SceneSetScript(159, "@5A95", "");
SceneEnter(159);
FadeOut(0);

['@5A95'];
PartySetRole(1, 0, 0);
PartySetPos(26, 90, 0);
RoleSetDirFrame(2, 0, 0);
EventSetState(158, 5, 2);
EventSetState(159, 0, 2);
WaitEventAutoScriptRun(6, false, false);
SetDlgLower(37, 0, false);
//未知对话
//未知对话
SetDlgUpper(8, 0, false);
//未知对话
//未知对话
WaitEventAutoScriptRun(6, false, false);
EventSetDirFrame(158, 5, 3, 0);
WaitEventAutoScriptRun(4, false, false);
EventSetDirFrame(158, 5, 0, 0);
WaitEventAutoScriptRun(4, false, false);
SetDlgLower(37, 0, false);
//未知对话
//未知对话
EventSetAutoScript(158, 5, "@5AEF");
WaitEventAutoScriptRun(25, false, false);
SetDlgLower(37, 0, false);
//未知对话
//未知对话
VideoUpdate(0, false);
SetDlgCenter(0, false);
//未知对话
//未知对话
//未知对话
//未知对话
HeroAddMagic(30008, 1);
HeroAddMagic(88, 1);
HeroAddMagic(91, 1);
AddItem(204, 0);
AddItem(2, 3);
AddItem(6, 3);
AddItem(3, 3);
AddItem(26, 2);
VideoUpdate(0, false);
SetDlgLower(37, 0, false);
//未知对话
//未知对话
//未知对话
//未知对话
VideoRestore();
//未知对话
//未知对话
//未知对话
//未知对话
//未知对话
//未知对话
//未知对话
//未知对话
VideoRestore();
//未知对话
//未知对话
//未知对话
EventSetAutoScript(158, 5, "@5AF1");
WaitEventAutoScriptRun(16, false, false);
SetDlgLower(37, 0, false);
//未知对话
//未知对话
//未知对话
//未知对话
VideoRestore();
//未知对话
WaitEventAutoScriptRun(2, false, false);
EventSetAutoScript(159, 0, "@5AF6");
WaitEventAutoScriptRun(8, false, false);
SetDlgUpper(24, 0, false);
//未知对话
//未知对话
RoleSetDirFrame(1, 0, 0);
VideoUpdate(0, false);
SetDlgLower(9, 0, false);
//未知对话
//未知对话
//未知对话
VideoUpdate(0, false);
SetDlgUpper(21, 0, false);
//未知对话
//未知对话
VideoRestore();
//未知对话
//未知对话
EventSetState(159, 0, 0);
PartySetRole(1, 3, 0);
ReplaceAndPause();

['@5AEF'];
NpcMoveToBlockMutexLock(26, 89, 1, 2);

['@5AF1'];
NpcMoveToBlockMutexLock(25, 88, 0, 2);

['@5AF6'];
NpcMoveToBlock(25, 89, 1, 3);

['@5B01'];
EventSetState(148, 8, 1);
FadeToScene(0, -1);
SetDlgLower(43, 0, false);
//未知对话
//未知对话
WaitEventAutoScriptRun(6, false, false);
PartyWalkToBlock(11, 37, 1, 8);
PartyWalkToBlock(13, 39, 1, 4);
RoleSetDirFrame(1, 0, 0);
WaitEventAutoScriptRun(2, false, false);
RoleSetDirFrame(1, 0, 1);
WaitEventAutoScriptRun(16, false, false);
EventSetState(148, 8, 0);
EventSetDirFrame(148, 2, 0, 1);
WaitEventAutoScriptRun(6, false, false);
EventSetDirFrame(148, 2, 0, 2);
WaitEventAutoScriptRun(6, false, false);
SetDlgCenter(0, false);
//未知对话
WaitEventAutoScriptRun(2, false, false);
PlaySound(132);
EventSetDirFrame(148, 2, 0, 3);
WaitEventAutoScriptRun(5, false, false);
EventSetDirFrame(148, 2, 0, 4);
WaitEventAutoScriptRun(4, false, false);
EventSetDirFrame(148, 2, 0, 5);
WaitEventAutoScriptRun(8, false, false);
EventSetDirFrame(148, 2, 0, 6);
EventSetState(148, 8, 1);
WaitEventAutoScriptRun(4, false, false);
EventSetDirFrame(148, 8, 0, 0);
WaitEventAutoScriptRun(3, false, false);
EventSetDirFrame(148, 8, 3, 0);
WaitEventAutoScriptRun(3, false, false);
SetDlgLower(43, 0, false);
//未知对话
//未知对话
EventSetState(148, 8, 0);
FadeToScene(0, -1);
EventSetState(148, 3, 0);
EventSetState(148, 4, 0);
EventSetState(148, 5, 0);

['@5BD7'];
ReplaceAndPause();
['Event_00149_00007_Trigger'];
//未知对话
//未知对话
VideoUpdate(0, false);
SetDlgLower(21, 0, false);
//未知对话
//未知对话
GotoWithSelect("@5BD7");
FadeOut(0);
NpcSetFrame(1);
EventSetState(148, 6, 2);
PartySetPos(29, 91, 1);
RoleSetDirFrame(1, 0, 0);
VideoUpdate(0, false);
SetDlgUpper(43, 0, false);
//未知对话
//未知对话
//未知对话
VideoUpdate(0, false);
SetDlgLower(1, 0, false);
//未知对话
//未知对话
VideoUpdate(0, false);
SetDlgUpper(43, 0, false);
//未知对话
//未知对话
//未知对话
BattleStart(293, "", "");
BattleEnd();
RoleRevive(true, 5);
VideoUpdate(0, false);
SetDlgLower(2, 0, false);
//未知对话
//未知对话
VideoUpdate(0, false);
SetDlgUpper(43, 0, false);
//未知对话
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
SetDlgUpper(43, 0, false);
//未知对话
//未知对话
//未知对话
VideoUpdate(0, false);
SetDlgLower(2, 0, false);
//未知对话
//未知对话
//未知对话
SetDlgUpper(43, 0, false);
//未知对话
//未知对话
VideoUpdate(0, false);
SetDlgLower(1, 0, false);
//未知对话
//未知对话
//未知对话
//未知对话
VideoUpdate(0, false);
SetDlgUpper(43, 0, false);
//未知对话
//未知对话
VideoUpdate(0, false);
SetDlgLower(1, 0, false);
//未知对话
//未知对话
//未知对话
VideoUpdate(0, false);
SetDlgUpper(43, 0, false);
//未知对话
//未知对话
VideoUpdate(0, false);
SetDlgLower(3, 0, false);
//未知对话
//未知对话
//未知对话
//未知对话
//未知对话
VideoUpdate(0, false);
SetDlgUpper(43, 0, false);
//未知对话
//未知对话
//未知对话
VideoUpdate(0, false);
SetDlgCenter(0, false);
//未知对话
//未知对话
//未知对话
VideoUpdate(0, false);
SetDlgLower(3, 0, false);
//未知对话
//未知对话
//未知对话
VideoUpdate(0, false);
SetDlgUpper(43, 0, false);
//未知对话
//未知对话
//未知对话
EventSetState(148, 6, 0);
EventSetTriggerScript(148, 3, "@5B01");
ReplaceAndPauseWithNop("@5C44", 0);

['@5C44'];
SetDlgCenter(0, false);
//未知对话

['@5CEA'];
//未知对话
//未知对话
//未知对话
//未知对话
VideoUpdate(0, false);
SetDlgLower(69, 0, false);
//未知对话
//未知对话
VideoUpdate(0, false);
//未知对话
//未知对话
//未知对话
VideoUpdate(0, false);
SetDlgLower(69, 0, false);
//未知对话
//未知对话
VideoUpdate(0, false);
//未知对话
//未知对话
EventSetState(-1, -1, 0);
FadeToScene(0, -1);

['@5D13'];
NpcSetFrame(1);
VideoUpdate(0, false);
SetDlgLower(69, 0, false);
//未知对话
//未知对话
NpcSetFrame(0);
VideoUpdate(0, false);
SetDlgUpper(1, 0, false);
//未知对话
//未知对话
NpcSetFrame(1);
VideoUpdate(0, false);
SetDlgLower(69, 0, false);
//未知对话
//未知对话
SetDlgUpper(1, 0, false);
//未知对话
//未知对话
VideoUpdate(0, false);
SetDlgLower(69, 0, false);
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
SetDlgUpper(6, 0, false);
//未知对话
//未知对话
//未知对话
VideoUpdate(0, false);
SetDlgLower(69, 0, false);
//未知对话
//未知对话
VideoUpdate(0, false);
SetDlgUpper(1, 0, false);
//未知对话
//未知对话
//未知对话
SetDlgLower(69, 0, false);
//未知对话
//未知对话
VideoUpdate(0, false);
SetDlgUpper(6, 0, false);
//未知对话
//未知对话
SetDlgLower(69, 0, false);
//未知对话
//未知对话
VideoUpdate(0, false);
SetDlgUpper(6, 0, false);
//未知对话
//未知对话
VideoUpdate(0, false);
SetDlgCenter(0, false);
//未知对话
//未知对话
VideoUpdate(0, false);
SetDlgLower(69, 0, false);
//未知对话
//未知对话
VideoUpdate(0, false);
SetDlgUpper(1, 0, false);
//未知对话
//未知对话
VideoUpdate(0, false);
SetDlgLower(69, 0, false);
//未知对话
//未知对话
//未知对话
NpcSetFrame(0);
WaitEventAutoScriptRun(2, false, false);
EventSetState(-1, -1, 0);
EventSetState(154, 5, 0);
AddItem(230, 0);
VideoUpdate(0, false);
SetDlgCenter(0, false);
//未知对话
SetDlgBox(0);
//未知对话
EventSetTriggerScript(154, 6, "@5CEA");

['@5D6A'];
NpcMoveToBlock(52, 27, 0, 3);
NpcSetDirFrame(2, 0);

['@5D6D'];
NpcMoveToBlock(52, 26, 1, 3);
NpcSetDirFrame(2, 0);

['@5DA7'];
SetPalette(Palette.平常_日夜);
PartySetPos(48, 26, 1);
HeroSetSprite(0, 2, true);
RoleSetDirFrame(2, 0, 0);
EventSetDirFrame(145, 4, 2, 0);
ViewportMove(52, 11, -1);
VideoUpdate(0, false);
SetDlgUpper(90, 0, false);
SetDlgLower(0, 0, false);
//未知对话
//未知对话
//未知对话
FadeOut(2);
ViewportMove(0, 0, 0);
VideoUpdate(0, false);
SetDlgLower(10, 0, false);
//未知对话
//未知对话
//未知对话
EventSetDirFrame(145, 4, 3, 0);
WaitEventAutoScriptRun(2, false, false);
PartyWalkToBlock(49, 25, 1, 4);
WaitEventAutoScriptRun(2, false, false);
SetDlgLower(2, 0, false);
//未知对话
//未知对话
//未知对话
ViewportMove(52, 11, -1);
SetDlgUpper(90, 0, false);
SetDlgLower(0, 0, false);
//未知对话
//未知对话
ViewportMove(0, 0, 0);
SetDlgLower(5, 0, false);
//未知对话
//未知对话
//未知对话
//未知对话
FadeOut(0);
EventSetState(145, 4, 0);
EventSetState(145, 5, 1);
HeroSetSprite(0, 511, true);
PartySetPos(53, 16, 0);
RoleMoveOneStep(0, 0, 10);
RoleSetDirFrame(0, 0, 0);
ViewportMove(0, 0, 0);
RoleMoveOneStep(0, 16, 10);
RoleSetDirFrame(0, 1, 0);
VideoUpdate(0, false);
PlaySound(45);
RoleMoveOneStep(0, 16, 10);
RoleSetDirFrame(0, 0, 0);
VideoUpdate(0, false);
RoleMoveOneStep(0, 16, 10);
RoleSetDirFrame(0, 1, 0);
VideoUpdate(0, false);
RoleMoveOneStep(0, 16, 10);
RoleSetDirFrame(0, 0, 0);
VideoUpdate(0, false);
RoleMoveOneStep(0, 16, 10);
RoleSetDirFrame(0, 1, 0);
VideoUpdate(0, false);
RoleMoveOneStep(0, 16, 10);
RoleSetDirFrame(0, 0, 0);
VideoUpdate(0, false);
RoleMoveOneStep(0, 16, 4);
RoleSetDirFrame(0, 1, 0);
VideoUpdate(0, false);
RoleMoveOneStep(0, 16, 3);
RoleSetDirFrame(0, 0, 0);
VideoUpdate(0, false);
RoleMoveOneStep(0, 16, 2);
RoleSetDirFrame(0, 1, 0);
VideoUpdate(0, false);
RoleMoveOneStep(0, 16, 0);
RoleSetDirFrame(0, 2, 0);
WaitEventAutoScriptRun(0, false, false);
PlaySound(92);
WaitEventAutoScriptRun(0, false, false);
RoleSetDirFrame(0, 3, 0);
WaitEventAutoScriptRun(3, false, false);
RoleSetDirFrame(0, 4, 0);
EventSetAutoScript(145, 5, "@5D6A");
WaitEventAutoScriptRun(14, false, false);
SetDlgUpper(21, 0, false);
//未知对话
VideoUpdate(0, false);
SetDlgLower(6, 0, false);
//未知对话
//未知对话
WaitEventAutoScriptRun(4, false, false);
SetDlgLower(90, 0, false);
//未知对话
//未知对话
VideoUpdate(0, false);
SetDlgLower(21, 0, false);
//未知对话
//未知对话
//未知对话
//未知对话
VideoRestore();
//未知对话
//未知对话
VideoUpdate(0, false);
SetDlgLower(90, 0, false);
//未知对话
//未知对话
EventSetAutoScript(145, 5, "@5D6D");
WaitEventAutoScriptRun(5, false, false);
SetDlgLower(21, 0, false);
//未知对话
//未知对话
VideoRestore();
//未知对话
//未知对话
MusicStop(0);
EventSetState(146, 0, 1);
PlaySound(122);
VideoShake(10, 0);
WaitEventAutoScriptRun(12, false, false);
SetDlgUpper(0, 0, false);
//未知对话
//未知对话
//未知对话
RoleSetAttr(Attribute.AvatarId, 91, 2);
RoleSetAttr(Attribute.SpriteIdInBattle, 5, 2);
RoleSetAttr(Attribute.SpriteId, 512, 2);
RoleSetAttr(Attribute.WalkFrames, 4, 2);
HeroAddMagic(2, 2);
PartySetRole(1, 2, 3);
RoleModifyHP(true, 999);
SetBattlefield(FbpWin.七星磐龙柱);
SetBattleMusic(Music.兵凶战危_2);
BattleStart(188, "@A073", "");
MusicPlay(Music.神木林_变奏, true, false);
BattleEnd();
SceneEnter(154);

['@5E33'];
NpcMoveToBlockMutexLock(50, 24, 1, 4);

['@5E51'];
NpcMoveToBlockMutexLock(52, 26, 1, 2);
NpcSetDirFrame(1, 0);

['@6029'];
EventSetDirFrame(153, 4, 1, 0);
WaitEventAutoScriptRun(0, false, false);
EventSetDirFrame(153, 8, 1, 0);
WaitEventAutoScriptRun(2, false, false);
EventSetDirFrame(153, 5, 0, 0);
EventSetDirFrame(153, 6, 1, 0);
WaitEventAutoScriptRun(0, false, false);
EventSetDirFrame(153, 7, 0, 0);
WaitEventAutoScriptRun(0, false, false);
EventSetDirFrame(153, 9, 3, 0);
EventSetDirFrame(153, 10, 1, 0);
WaitEventAutoScriptRun(0, false, false);
EventSetDirFrame(153, 3, 0, 0);
EventSetDirFrame(153, 11, 2, 0);
EventSetDirFrame(153, 12, 2, 0);
WaitEventAutoScriptRun(2, false, false);
EventSetDirFrame(153, 13, 0, 0);
WaitEventAutoScriptRun(0, false, false);
EventSetDirFrame(153, 4, 0, 0);
EventSetDirFrame(153, 6, 0, 0);
WaitEventAutoScriptRun(0, false, false);
EventSetDirFrame(153, 11, 1, 0);
WaitEventAutoScriptRun(2, false, false);
EventSetDirFrame(153, 9, 1, 0);
WaitEventAutoScriptRun(0, false, false);
EventSetDirFrame(153, 10, 3, 0);
EventSetDirFrame(153, 3, 1, 0);
EventSetDirFrame(153, 12, 3, 0);
WaitEventAutoScriptRun(0, false, false);
EventSetDirFrame(153, 4, 1, 0);
WaitEventAutoScriptRun(0, false, false);

['@6049'];
EventSetDirFrame(153, 4, 3, 0);
EventSetDirFrame(153, 5, 3, 0);
EventSetDirFrame(153, 6, 3, 0);
EventSetDirFrame(153, 7, 3, 0);
EventSetDirFrame(153, 8, 2, 0);
EventSetDirFrame(153, 9, 2, 0);
EventSetDirFrame(153, 10, 2, 0);
EventSetDirFrame(153, 11, 3, 0);
EventSetDirFrame(153, 12, 3, 0);
EventSetDirFrame(153, 13, 3, 0);

['@6054'];
NpcMoveToBlock(47, 25, 1, 3);
NpcMoveToBlock(48, 26, 0, 3);
NpcMoveToBlock(45, 28, 1, 3);
EventSetState(-1, -1, 0);

['@6059'];
NpcMoveToBlock(48, 25, 1, 3);
NpcMoveToBlock(45, 28, 1, 3);
EventSetState(-1, -1, 0);

['@605D'];
NpcMoveToBlock(48, 19, 0, 3);
EventSetState(-1, -1, 0);

['@6060'];
NpcMoveToBlock(47, 20, 0, 3);
EventSetState(-1, -1, 0);

['@6063'];
NpcMoveToBlock(48, 28, 0, 3);
NpcMoveToBlock(45, 30, 1, 3);
EventSetState(-1, -1, 0);

['@6067'];
NpcMoveToBlock(45, 28, 1, 3);
EventSetState(-1, -1, 0);

['@606A'];
NpcMoveToBlock(45, 21, 1, 3);
EventSetState(-1, -1, 0);

['@606D'];
NpcMoveToBlock(48, 19, 0, 3);
EventSetState(-1, -1, 0);

['@6108'];
BattleEnd();
VideoUpdate(0, false);
EventSetState(-1, -1, 0);
PlaySound(262);
FadeToScene(2, -1);

['@620C'];
SceneEnter(176);
PartySetPos(44, 103, 1);
FadeOut(0);

['@6250'];
SceneEnter(181);
PartySetPos(52, 106, 0);
FadeOut(0);

['@6267'];
EventWalkOneStep(-1, -1, 0, -4);
GotoWithNop("@6267", 0);

['@626A'];
EventWalkOneStep(-1, -1, 0, -8);
EventWalkOneStep(-1, -1, 0, -10);
EventWalkOneStep(-1, -1, 0, -12);
EventWalkOneStep(-1, -1, 0, -12);
EventWalkOneStep(-1, -1, 0, -12);
EventWalkOneStep(-1, -1, 0, -12);
EventWalkOneStep(-1, -1, 0, -12);
EventWalkOneStep(-1, -1, 0, -12);
EventWalkOneStep(-1, -1, 0, -12);
EventWalkOneStep(-1, -1, 0, -12);
EventWalkOneStep(-1, -1, 0, -12);
EventSetState(-1, -1, 0);

['@65A1'];
EventSetTriggerMode(-1, -1, false, -1);
VideoUpdate(0, false);
SetDlgLower(6, 0, false);
//未知对话
//未知对话
NpcSetFrame(9);
VideoUpdate(0, false);
SetDlgCenter(0, false);
//未知对话
EventSetAutoScript(-1, -1, "");
NpcSetFrame(0);
WaitEventAutoScriptRun(4, false, false);
NpcSetFrame(9);
EventModifyPos(-1, -1, -16, 8);
VideoUpdate(0, false);
NpcSetFrame(10);
EventModifyPos(-1, -1, -16, 8);
RoleSetDirFrame(3, 0, 0);
VideoUpdate(0, false);
NpcSetFrame(9);
EventModifyPos(-1, -1, -16, 8);
VideoUpdate(0, false);
NpcSetFrame(0);
EventModifyPos(-1, -1, -16, 8);
VideoUpdate(0, false);
NpcSetFrame(9);
EventModifyPos(-1, -1, -16, 8);
RoleSetDirFrame(0, 0, 0);
VideoUpdate(0, false);
NpcSetFrame(10);
EventModifyPos(-1, -1, -16, 8);
VideoUpdate(0, false);
NpcSetFrame(9);
EventModifyPos(-1, -1, -16, 8);
VideoUpdate(0, false);
NpcSetFrame(0);
EventModifyPos(-1, -1, -16, 8);
VideoUpdate(0, false);
EventSetState(-1, -1, 0);

['@65CE'];
EventSetTriggerMode(-1, -1, false, -1);
EventSetState(-1, -1, 1);
EventSetAutoScript(-1, -1, "");
VideoUpdate(0, false);
SetDlgLower(6, 0, false);
//未知对话
//未知对话
VideoUpdate(0, false);
NpcSetFrame(4);
WaitEventAutoScriptRun(2, false, false);
NpcSetFrame(3);
WaitEventAutoScriptRun(2, false, false);
NpcSetFrame(4);
WaitEventAutoScriptRun(2, false, false);
NpcSetFrame(3);
WaitEventAutoScriptRun(2, false, false);
NpcSetFrame(4);
WaitEventAutoScriptRun(2, false, false);
NpcSetFrame(3);
WaitEventAutoScriptRun(2, false, false);
SetDlgLower(6, 0, false);
//未知对话
//未知对话
VideoRestore();
//未知对话
NpcSetFrame(9);
EventSetState(192, 59, 1);
VideoUpdate(0, false);
SetDlgCenter(0, false);
//未知对话
NpcSetFrame(10);
EventSetAutoScript(192, 59, "Event_00193_00060_Auto");
WaitEventAutoScriptRun(0, false, false);
NpcSetFrame(11);
WaitEventAutoScriptRun(0, false, false);
NpcSetFrame(12);
WaitEventAutoScriptRun(0, false, false);
NpcSetFrame(13);
EventSetState(192, 60, 1);
WaitEventAutoScriptRun(0, false, false);
NpcSetFrame(14);
WaitEventAutoScriptRun(0, false, false);
RoleSetDirFrame(3, 0, 0);
NpcSetFrame(15);
WaitEventAutoScriptRun(0, false, false);
EventSetState(192, 61, 1);
WaitEventAutoScriptRun(4, false, false);
RoleSetDirFrame(0, 0, 0);

['@6647'];
EventModifyPos(-1, -1, -12, 6);
NpcSetFrame(23);

['@664A'];
EventModifyPos(-1, -1, 12, 6);
NpcSetFrame(11);

['@664D'];
EventWalkOneStep(-1, -1, -8, 2);
GotoWithNop("@664D", 0);

['@66CA'];
Call("@6647");
EventWalkOneStep(-1, -1, -12, 6);
EventWalkOneStep(-1, -1, -12, 6);
EventWalkOneStep(-1, -1, -12, 6);
Call("@6647");
EventWalkOneStep(-1, -1, -12, 6);
EventWalkOneStep(-1, -1, -12, 6);
EventWalkOneStep(-1, -1, -12, 6);
Call("@6647");
EventWalkOneStep(-1, -1, -12, 6);
EventWalkOneStep(-1, -1, -12, 6);
EventWalkOneStep(-1, -1, -12, 6);
Call("@6647");
EventWalkOneStep(-1, -1, -10, 5);
Call("@664A");
EventWalkOneStep(-1, -1, 12, 6);
EventWalkOneStep(-1, -1, 12, 6);
EventWalkOneStep(-1, -1, 12, 6);
Call("@664A");
EventWalkOneStep(-1, -1, 12, 6);
EventWalkOneStep(-1, -1, 12, 6);

['@66E0'];
NpcSetFrame(17);
NpcSetFrame(18);
NpcSetFrame(19);
NpcSetFrame(19);
NpcSetFrame(19);
NpcSetFrame(19);
NpcSetFrame(18);
EventModifyPos(185, 71, 16, 12);
NpcSetFrame(29);
EventModifyPos(-1, -1, 10, 10);
EventModifyPos(-1, -1, 10, 8);
EventModifyPos(-1, -1, 10, 6);
EventModifyPos(-1, -1, 10, 4);
EventModifyPos(-1, -1, 10, 2);
EventModifyPos(-1, -1, 10, 1);
EventModifyPos(-1, -1, 10, 0);
EventSetState(-1, -1, 0);

['@68A3'];
NpcMoveToBlock(40, 97, 0, 3);
NpcMoveToBlock(45, 91, 1, 8);
NpcMoveToBlock(42, 88, 0, 8);
NpcSetDirFrame(3, 0);
EventSetTriggerMode(-1, -1, true, 2);

['@68C4'];
NpcMoveToBlock(33, 96, 0, 3);
EventSetState(-1, -1, 0);

['@68C7'];
NpcMoveToBlock(32, 96, 1, 3);
EventSetState(-1, -1, 0);

['@68E6'];
NpcMoveToBlock(16, 95, 0, 8);
NpcMoveToBlock(18, 93, 0, 8);
EventSetState(175, 16, 2);
EventSetState(175, 17, 2);
EventSetState(-1, -1, 0);

['@6B18'];
NpcMoveToBlock(22, 104, 0, 3);
ReplaceAndPause();
ReplaceAndPause();
NpcMoveToBlockMutexLock(21, 103, 1, 2);

['@6B1D'];
NpcMoveToBlockMutexLock(20, 102, 1, 2);

['@6B1F'];
EventModifyPos(-1, -1, 4, 2);
ReplaceAndPause();
ReplaceAndPause();
EventModifyPos(-1, -1, 4, 2);
ReplaceAndPause();
ReplaceAndPause();
EventModifyPos(-1, -1, 4, 2);
ReplaceAndPause();
ReplaceAndPause();
EventModifyPos(-1, -1, 4, 2);
ReplaceAndPause();
ReplaceAndPause();
EventModifyPos(-1, -1, 4, 2);
ReplaceAndPause();
ReplaceAndPause();
EventModifyPos(-1, -1, 4, 2);
ReplaceAndPause();
ReplaceAndPause();
EventModifyPos(-1, -1, 4, 2);

['@6B33'];
NpcMoveToBlock(30, 83, 0, 3);
NpcSetDirFrame(1, 0);

['@6B36'];
NpcMoveToBlock(32, 81, 0, 3);

['@6B38'];
GotoWithNop("@A9F3", 0);
['@6B39'];
FadeToScene(0, -1);
RoleSetDirFrame(3, 0, 0);
WaitEventAutoScriptRun(7, false, false);
RoleSetDirFrame(1, 0, 0);
WaitEventAutoScriptRun(6, false, false);
RoleSetDirFrame(2, 0, 0);
WaitEventAutoScriptRun(3, false, false);
SetDlgUpper(2, 0, false);
//未知对话
//未知对话
VideoUpdate(0, false);
JumpIfEventStateMatches(273, 6, 0, "@6B72");
EventSetDirFrame(182, 2, 3, 0);
VideoUpdate(0, false);
SetDlgLower(32, 0, false);
//未知对话
//未知对话
//未知对话
RoleSetDirFrame(0, 0, 0);
VideoUpdate(0, false);
SetDlgUpper(1, 0, false);
//未知对话
//未知对话
VideoUpdate(0, false);
SetDlgLower(27, 0, false);
//未知对话
//未知对话
//未知对话
//未知对话
//未知对话
VideoUpdate(0, false);
SetDlgUpper(3, 0, false);
//未知对话
//未知对话
//未知对话
VideoUpdate(0, false);
SetDlgLower(28, 0, false);
//未知对话
//未知对话
VideoUpdate(0, false);
SetDlgUpper(5, 0, false);
//未知对话
//未知对话
//未知对话
EventSetDirFrame(182, 2, 2, 0);
VideoUpdate(0, false);
SetDlgLower(28, 0, false);
//未知对话
//未知对话
//未知对话
//未知对话
//未知对话
VideoUpdate(0, false);
SetDlgUpper(1, 0, false);
//未知对话
//未知对话
JumpIfEventStateMatches(205, 18, 0, "@6B76");
['@6B72'];
EventSetState(182, 2, 0);
PartySetRole(5, 1, 0);
ReplaceAndPause();

['@6B76'];
VideoUpdate(0, false);
SetDlgLower(27, 0, false);
//未知对话
//未知对话
//未知对话
VideoUpdate(0, false);
SetDlgUpper(10, 0, false);
//未知对话
//未知对话
VideoUpdate(0, false);
SetDlgLower(29, 0, false);
//未知对话
//未知对话
//未知对话
SetDlgUpper(10, 0, false);
//未知对话
//未知对话
EventSetDirFrame(182, 2, 3, 0);
VideoUpdate(0, false);
SetDlgLower(27, 0, false);
//未知对话
//未知对话
EventSetState(182, 2, 0);
PartySetRole(5, 1, 0);
ReplaceAndPause();

['@6C45'];
SceneEnter(229);
PartySetPos(6, 31, 1);
FadeOut(0);

['@6C55'];
SceneEnter(173);
PartySetPos(22, 39, 0);
FadeOut(0);

['@6C59'];
EventAnimate(0);
GotoWithNop("@6C59", 0);

['@6C77'];
WaitEventAutoScriptRun(16, false, false);
NpcSetDirFrame(0, 0);
WaitEventAutoScriptRun(10, false, false);
NpcSetDirFrame(3, 0);
WaitEventAutoScriptRun(4, false, false);
NpcMoveToBlockMutexLock(24, 36, 1, 4);
NpcMoveToBlockMutexLock(20, 40, 1, 4);

['@6D77'];
NpcSetDirFrame(0, 0);
NpcMoveToBlockMutexLock(38, 49, 0, 4);

['@6D7A'];
SetDlgUpper(82, 0, false);
//未知对话
//未知对话
//未知对话
VideoUpdate(0, false);
SetDlgLower(1, 0, false);
//未知对话
//未知对话
VideoUpdate(0, false);
SetDlgUpper(82, 0, false);
//未知对话
//未知对话
//未知对话
VideoUpdate(0, false);
SetDlgLower(1, 0, false);
//未知对话
//未知对话
//未知对话
//未知对话
//未知对话
//未知对话
//未知对话
//未知对话
VideoUpdate(0, false);
SetDlgUpper(28, 0, false);
//未知对话
//未知对话
//未知对话
VideoUpdate(0, false);
SetDlgLower(6, 0, false);
//未知对话
//未知对话
VideoUpdate(0, false);
//未知对话
//未知对话
//未知对话
VideoUpdate(0, false);
SetDlgLower(32, 0, false);
//未知对话
//未知对话
VideoUpdate(0, false);
SetDlgUpper(82, 0, false);
//未知对话
//未知对话
VideoUpdate(0, false);
SetDlgLower(27, 0, false);
//未知对话
//未知对话
VideoUpdate(0, false);
SetDlgUpper(82, 0, false);
//未知对话
//未知对话
VideoUpdate(0, false);
SetDlgLower(31, 0, false);
//未知对话
//未知对话
VideoUpdate(0, false);
SetDlgUpper(82, 0, false);
//未知对话
//未知对话
//未知对话
//未知对话
//未知对话
VideoRestore();
//未知对话
//未知对话
//未知对话
//未知对话
FadeOut(2);
FadeFbp(FbpWin.黑底屏, 0);
SetDlgCenter(0, false);
//未知对话
MusicPlay(Music.盟誓, true, false);
SetPaletteTime(0);
FadeIn(0);
Delay(20);
RemoveItem(215, 0, "");
RemoveItem(216, 0, "");
SceneEnter(173);
FadeOut(0);

['@6E47'];
NpcMoveToBlock(17, 29, 1, 3);
NpcSetDirFrame(2, 0);

['@6E4C'];
NpcMoveToBlock(21, 33, 1, 3);
NpcMoveToBlock(18, 30, 1, 3);
NpcMoveToBlock(19, 30, 0, 3);
NpcSetDirFrame(1, 0);

['@6E51'];
NpcMoveToBlock(18, 29, 1, 3);

['@6EF5'];
SetDlgLower(82, 0, false);
//未知对话
//未知对话
//未知对话
//未知对话
//未知对话
VideoRestore();
//未知对话
//未知对话
//未知对话
VideoRestore();
//未知对话
//未知对话
ReplaceAndPause();
['Event_00173_00009_Trigger'];
JumpIfItemCountLessThan(92, 36, "@6EF5");
SetDlgLower(82, 0, false);
//未知对话
//未知对话
GotoWithNop("@AA0E", 0);
['@6F08'];
FadeOut(0);
SceneSetScript(175, "@6F33", "");
SceneEnter(175);

['@6F0C'];
NpcMoveToBlockMutexLock(18, 29, 0, 2);
WaitEventAutoScriptRun(2, false, false);
NpcSetDirFrame(2, 0);
WaitEventAutoScriptRun(30, false, false);
NpcSetDirFrame(3, 0);
WaitEventAutoScriptRun(8, false, false);
NpcMoveToBlockMutexLock(19, 30, 1, 2);
WaitEventAutoScriptRun(4, false, false);
NpcSetDirFrame(0, 0);
NpcMoveToBlockMutexLock(18, 29, 0, 2);
WaitEventAutoScriptRun(2, false, false);
NpcSetDirFrame(0, 0);
NpcSetDirFrame(3, 0);
WaitEventAutoScriptRun(4, false, false);
NpcMoveToBlockMutexLock(19, 30, 1, 2);
WaitEventAutoScriptRun(3, false, false);
NpcSetDirFrame(0, 0);
WaitEventAutoScriptRun(3, false, false);
ReplaceAndPauseWithNop("@6F0C", 0);

['@6F33'];
RoleSetAttr(Attribute.AvatarId, 11, 2);
RoleSetAttr(Attribute.SpriteIdInBattle, 1, 2);
RoleSetAttr(Attribute.SpriteId, 3, 2);
RoleSetAttr(Attribute.WalkFrames, 3, 2);
EventSetTriggerScript(179, 6, "@6C45");
EventSetTriggerScript(214, 2, "@798E");
EventSetTriggerScript(176, 2, "Event_00177_00002_Trigger");
EventSetStateSequence(174, 4, 174, 7, 0);
EventSetState(174, 11, 1);
EventSetState(174, 2, 0);
EventSetState(174, 3, 1);
EventSetState(174, 9, 1);
EventSetState(174, 10, 1);
EventSetState(174, 8, 2);
EventSetDirFrame(174, 8, 0, 0);
EventSetTriggerScript(174, 8, "@6F79");
PartySetRole(2, 0, 0);
PartySetPos(23, 37, 1);
RoleSetDirFrame(2, 0, 0);
VideoUpdate(2, false);
SetDlgUpper(82, 0, false);
//未知对话
//未知对话
VideoUpdate(0, false);
SetDlgLower(11, 0, false);
//未知对话
//未知对话
VideoUpdate(0, false);
SetDlgUpper(82, 0, false);
//未知对话
//未知对话
//未知对话
//未知对话
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
SetDlgLower(9, 0, false);
//未知对话
//未知对话
VideoUpdate(0, false);
SetDlgLower(27, 0, false);
//未知对话
//未知对话
VideoUpdate(0, false);
SetDlgLower(82, 0, false);
//未知对话
//未知对话
//未知对话
RoleSetDirFrame(3, 0, 0);
VideoUpdate(0, false);
RoleSetDirFrame(0, 0, 0);
EventSetDirFrame(174, 10, 1, 0);
WaitEventAutoScriptRun(5, false, false);
PartyWalkToBlock(22, 38, 1, 2);
VideoUpdate(0, false);
SetDlgLower(11, 0, false);
//未知对话
//未知对话
EventSetState(174, 9, 0);
EventSetState(174, 10, 0);
PartySetRole(2, 1, 5);
ReplaceAndPause();

['@6F79'];
SetDlgLower(82, 0, false);
//未知对话
//未知对话

['@6F7D'];
NpcMoveToBlock(24, 33, 0, 8);
NpcMoveToBlock(23, 32, 0, 8);
NpcMoveToBlock(26, 29, 0, 8);
NpcMoveToBlock(22, 25, 0, 8);

['@6F87'];
SetDlgLower(32, 0, false);
//未知对话
//未知对话
VideoUpdate(0, false);
SetDlgUpper(82, 0, false);
//未知对话
//未知对话
VideoRestore();
//未知对话
//未知对话
VideoUpdate(0, false);
SetDlgLower(28, 0, false);
//未知对话
//未知对话
//未知对话
VideoRestore();
//未知对话
//未知对话
//未知对话
//未知对话
VideoUpdate(0, false);
SetDlgUpper(82, 0, false);
//未知对话
//未知对话
//未知对话
//未知对话
//未知对话
//未知对话
VideoUpdate(0, false);
SetDlgLower(29, 0, false);
//未知对话
//未知对话
//未知对话
VideoUpdate(0, false);
SetDlgUpper(82, 0, false);
//未知对话
//未知对话
//未知对话
VideoRestore();
//未知对话
//未知对话
//未知对话
//未知对话
VideoUpdate(0, false);
SetDlgUpper(1, 0, false);
//未知对话
//未知对话
//未知对话
//未知对话
VideoUpdate(0, false);
SetDlgUpper(82, 0, false);
//未知对话
//未知对话
//未知对话
ReplaceAndPause();
SetDlgLower(29, 0, false);
//未知对话
//未知对话
VideoUpdate(0, false);
SetDlgUpper(82, 0, false);
//未知对话
//未知对话

['@7182'];
EventSetTriggerMode(-1, -1, false, 1);
NpcSetDirFrame(0, 0);
VideoUpdate(0, false);
SetDlgUpper(0, 0, false);
//未知对话
//未知对话
VideoUpdate(0, false);
SetDlgLower(27, 0, false);
//未知对话
//未知对话
//未知对话
VideoUpdate(0, false);
SetDlgUpper(0, 0, false);
//未知对话
//未知对话
//未知对话
//未知对话
//未知对话
VideoUpdate(0, false);
SetDlgLower(27, 0, false);
//未知对话
//未知对话
SetDlgUpper(0, 0, false);
//未知对话
//未知对话
//未知对话
VideoUpdate(0, false);
SetDlgLower(29, 0, false);
//未知对话
//未知对话
//未知对话
EventSetAutoScript(-1, -1, "@71A9");
ReplaceAndPause();
//未知对话
//未知对话

['@71A6'];
//未知对话
//未知对话

['@71A9'];
NpcMoveToBlock(46, 25, 1, 3);
NpcSetDirFrame(3, 0);

['@71C6'];
EventSetTriggerMode(-1, -1, false, -1);
//未知对话
//未知对话
//未知对话
VideoUpdate(0, false);
SetDlgLower(27, 0, false);
//未知对话
//未知对话
//未知对话
VideoUpdate(0, false);
SetDlgUpper(0, 0, false);
//未知对话
//未知对话
//未知对话
VideoUpdate(0, false);
SetDlgLower(27, 0, false);
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
SetDlgLower(30, 0, false);
//未知对话
//未知对话
//未知对话
VideoUpdate(0, false);
SetDlgUpper(0, 0, false);
//未知对话
//未知对话
VideoUpdate(0, false);
SetDlgLower(30, 0, false);
//未知对话
//未知对话
//未知对话
VideoUpdate(0, false);
SetDlgUpper(0, 0, false);
//未知对话
//未知对话
EventSetAutoScript(-1, -1, "@71FD");
WaitEventAutoScriptRun(16, false, false);
RoleSetDirFrame(0, 0, 0);
WaitEventAutoScriptRun(4, false, false);
RoleSetDirFrame(0, 0, 1);
WaitEventAutoScriptRun(8, false, false);
RoleSetDirFrame(3, 0, 0);
WaitEventAutoScriptRun(2, false, false);
SetDlgUpper(0, 0, false);
//未知对话
//未知对话

['@71FD'];
NpcMoveToBlock(48, 64, 1, 3);
NpcMoveToBlock(49, 65, 0, 3);
NpcMoveToBlock(48, 66, 0, 3);
NpcMoveToBlock(55, 73, 0, 8);
EventSetState(-1, -1, 0);

['@724E'];
NpcMoveToBlockMutexLock(54, 96, 0, 2);

['@7250'];
NpcMoveToBlock(53, 96, 1, 3);
NpcMoveToBlock(50, 93, 0, 3);
NpcSetDirFrame(2, 0);
WaitEventAutoScriptRun(2, false, false);
NpcSetDirFrame(1, 0);

['@7256'];
NpcMoveToBlock(49, 94, 0, 3);
NpcMoveToBlock(48, 93, 0, 3);
NpcMoveToBlock(51, 96, 0, 3);
NpcMoveToBlock(52, 95, 0, 3);
NpcMoveToBlock(53, 96, 1, 3);
NpcMoveToBlock(55, 94, 1, 3);
NpcMoveToBlockMutexLock(54, 95, 1, 2);
EventSetAutoScript(206, 18, "Event_00207_00018_Auto");

['@743C'];
PartySetPos(29, 75, 0);
Call("@8E29");

['@74F1'];
PartySetPos(15, 18, 1);
VideoUpdate(0, false);
SetDlgUpper(1, 0, false);
//未知对话
//未知对话
//未知对话
RoleSetDirFrame(0, 0, 0);
VideoUpdate(0, false);
RoleSetDirFrame(1, 0, 0);
VideoUpdate(0, false);
SetDlgLower(29, 0, false);
//未知对话
//未知对话
RoleSetDirFrame(3, 0, 0);
ReplaceAndPause();

['@7608'];
//未知对话
//未知对话

['@764A'];
NpcMoveToBlockMutexLock(37, 46, 1, 2);

['@7669'];
NpcMoveToBlock(37, 46, 0, 3);

['@766B'];
EventSetTriggerScript(206, 1, "Event_00207_00001_Trigger");
PartySetRole(5, 1, 0);
PartySetPos(33, 52, 1);
WaitEventAutoScriptRun(0, false, false);
Call("Event_00205_00002_Trigger");
PartyWalkToBlock(37, 47, 0, 8);
WaitEventAutoScriptRun(6, false, false);
HeroSetSprite(0, 232, false);
PartySetRole(1, 0, 0);
RoleSetDirFrame(0, 0, 0);
EventSetState(203, 24, 1);
EventSetState(203, 22, 1);
WaitEventAutoScriptRun(15, false, false);
//未知对话
//未知对话
//未知对话
WaitEventAutoScriptRun(14, false, false);
EventSetState(203, 24, 0);
EventSetState(203, 25, 1);
VideoUpdate(0, false);
//未知对话
//未知对话
//未知对话
//未知对话
EventSetDirFrame(203, 25, 0, 0);
VideoUpdate(0, false);
SetDlgUpper(27, 0, false);
//未知对话
//未知对话
VideoUpdate(0, false);
SetDlgLower(1, 0, false);
//未知对话
//未知对话
VideoUpdate(0, false);
SetDlgUpper(27, 0, false);
//未知对话
//未知对话
//未知对话
//未知对话
VideoUpdate(0, false);
SetDlgLower(0, 0, false);
//未知对话
//未知对话
//未知对话
//未知对话
VideoUpdate(0, false);
SetDlgUpper(32, 0, false);
//未知对话
//未知对话
VideoUpdate(0, false);
SetDlgLower(6, 0, false);
//未知对话
//未知对话
//未知对话
VideoUpdate(0, false);
SetDlgUpper(27, 0, false);
//未知对话
//未知对话
//未知对话
//未知对话
//未知对话
//未知对话
WaitEventAutoScriptRun(20, false, false);
EventSetAutoScript(203, 22, "@764A");
WaitEventAutoScriptRun(26, false, false);
EventSetDirFrame(203, 25, 2, 0);
WaitEventAutoScriptRun(12, false, false);
EventSetState(203, 22, 0);
EventSetState(203, 23, 1);
VideoUpdate(0, false);
SetDlgLower(0, 0, false);
//未知对话
//未知对话
//未知对话
//未知对话
VideoRestore();
//未知对话
//未知对话
EventSetAutoScript(203, 23, "@76DD");
WaitEventAutoScriptRun(0, false, false);
SetDlgLower(0, 0, false);
//未知对话
//未知对话
WaitEventAutoScriptRun(10, false, false);
EventSetAutoScript(203, 23, "");
SetDlgLower(0, 0, false);
//未知对话
//未知对话
//未知对话
//未知对话
EventSetAutoScript(203, 25, "@7669");
WaitEventAutoScriptRun(0, false, false);
SetDlgUpper(28, 0, false);
//未知对话
//未知对话
//未知对话
EventSetAutoScript(203, 23, "@76DD");
WaitEventAutoScriptRun(0, false, false);
//未知对话
//未知对话
PlaySound(170);
WaitEventAutoScriptRun(16, false, false);
EventSetState(203, 23, 0);
WaitEventAutoScriptRun(5, false, false);
//未知对话
//未知对话
FadeOut(0);
HeroSetSprite(0, 2, true);
SceneEnter(201);
ReplaceAndPause();
['Event_00204_00003_Trigger'];
PartySetPos(33, 52, 1);
WaitEventAutoScriptRun(0, false, false);
Call("Event_00205_00002_Trigger");

['@76DD'];
EventAnimate(0);
ReplaceAndPauseWithNop("@76DD", 0);

['@76ED'];
VideoWave(0, 0);
EventSetState(203, 15, 0);
EventSetState(203, 16, 0);
EventSetState(203, 17, 0);
EventSetState(203, 18, 0);
EventSetState(203, 19, 0);
EventSetState(203, 20, 0);
EventSetState(203, 25, 0);
EventSetState(203, 26, 1);
PartySetPos(36, 47, 1);
HeroSetSprite(0, 232, true);
RoleSetDirFrame(0, 0, 0);
VideoUpdate(0, false);
//未知对话
//未知对话
//未知对话
VideoUpdate(0, false);
HeroSetSprite(0, 2, true);
FadeToScene(2, -1);
SetDlgUpper(1, 0, false);
//未知对话
//未知对话
EventSetState(203, 26, 0);
EventSetState(203, 27, 1);
WaitEventAutoScriptRun(4, false, false);
SetDlgLower(28, 0, false);
//未知对话
//未知对话
WaitEventAutoScriptRun(0, false, false);
RoleSetDirFrame(2, 0, 0);
WaitEventAutoScriptRun(2, false, false);
EventSetState(203, 27, 0);
HeroSetSprite(0, 607, true);
RoleSetDirFrame(0, 0, 0);
VideoUpdate(0, false);
SetDlgLower(0, 0, false);
//未知对话
//未知对话
//未知对话
RoleSetDirFrame(0, 1, 0);
VideoUpdate(0, false);
SetDlgUpper(6, 0, false);
//未知对话
//未知对话
//未知对话
VideoUpdate(0, false);
SetDlgLower(31, 0, false);
//未知对话
//未知对话
//未知对话
VideoUpdate(0, false);
SetDlgUpper(9, 0, false);
//未知对话
//未知对话
//未知对话
RoleSetDirFrame(0, 2, 0);
VideoUpdate(0, false);
SetDlgLower(28, 0, false);
//未知对话
//未知对话
RoleSetDirFrame(0, 3, 0);
VideoUpdate(0, false);
SetDlgLower(32, 0, false);
//未知对话
//未知对话
//未知对话
AddItem(215, 0);
SetDlgBox(0);
//未知对话
VideoUpdate(0, false);
SetDlgUpper(1, 0, false);
//未知对话
//未知对话
VideoUpdate(0, false);
SetDlgLower(31, 0, false);
//未知对话
//未知对话
//未知对话
//未知对话
SetDlgUpper(2, 0, false);
//未知对话
//未知对话
//未知对话
HeroSetSprite(0, 2, false);
PartySetRole(1, 5, 0);
RoleSetDirFrame(0, 0, 0);
EventSetTriggerScript(174, 8, "@6D7A");
EventSetTriggerScript(204, 0, "Event_00235_00026_Trigger");
MusicPlay(Music.白河寒秋, true, false);
ReplaceAndPause();

['@7758'];
SetDlgLower(27, 0, false);
//未知对话
//未知对话
//未知对话
RoleMoveOneStep(16, -8, 0);
WaitEventAutoScriptRun(0, false, false);
RoleMoveOneStep(16, -8, 0);
WaitEventAutoScriptRun(0, false, false);

['@798E'];
SceneEnter(229);
PartySetPos(39, 50, 0);
FadeOut(0);

['@7A3C'];
PartySetPosToFirstRole();
RideNpcToPos(15, 97, 1, 4);
PartyWalkToBlock(16, 98, 0, 4);
ReplaceAndPause();
PartySetPosToFirstRole();
RideNpcToPos(8, 90, 1, 4);
PartyWalkToBlock(9, 90, 0, 4);
ReplaceAndPauseWithNop("@7A3C", 0);

['@7B3E'];
HeroAddMagic(30009, 2);

['@7D1D'];
NpcSetDirFrame(0, 0);
ReplaceAndPauseWithNop("Event_00231_00007_Auto", 0);

['@7D20'];
NpcSetDirFrame(1, 0);
ReplaceAndPauseWithNop("Event_00231_00007_Auto", 0);

['@7D23'];
NpcSetDirFrame(3, 0);
ReplaceAndPauseWithNop("Event_00231_00007_Auto", 0);

['@7DD5'];
EventWalkOneStep(-1, -1, 6, -7);
ReplaceAndPause();
ReplaceAndPauseWithNop("@7DD5", 8);
NpcSetDirFrame(2, 0);

['@7DDA'];
NpcMoveToBlockMutexLock(27, 78, 1, 2);
NpcMoveToBlockMutexLock(28, 79, 1, 2);
NpcSetDirFrame(0, 0);

['@7DDE'];
ReplaceAndPause();
NpcSetDirFrame(0, 0);
WaitEventAutoScriptRun(3, false, false);
NpcMoveToBlock(29, 78, 1, 3);
NpcSetDirFrame(0, 0);

['@7DE4'];
ReplaceAndPause();
NpcSetDirFrame(3, 0);
WaitEventAutoScriptRun(3, false, false);
NpcMoveToBlock(19, 83, 1, 3);
EventSetState(-1, -1, 0);

['@7DEA'];
NpcSetDirFrame(3, 0);
WaitEventAutoScriptRun(2, false, false);
NpcMoveToBlock(22, 79, 0, 3);
NpcMoveToBlock(19, 82, 0, 3);
EventSetState(-1, -1, 0);

['@7DF0'];
WaitEventAutoScriptRun(3, false, false);
NpcSetDirFrame(3, 0);
WaitEventAutoScriptRun(4, false, false);
NpcMoveToBlock(19, 83, 0, 3);
EventSetState(-1, -1, 0);

['@7DF6'];
WaitEventAutoScriptRun(2, false, false);
NpcSetDirFrame(2, 0);
WaitEventAutoScriptRun(2, false, false);
NpcSetDirFrame(3, 0);
NpcMoveToBlock(19, 86, 1, 3);
EventSetState(-1, -1, 0);

['@7DFD'];
WaitEventAutoScriptRun(4, false, false);
NpcSetDirFrame(1, 0);
ReplaceAndPause();
NpcMoveToBlock(21, 88, 1, 3);
EventSetState(-1, -1, 0);

['@7E03'];
WaitEventAutoScriptRun(5, false, false);
NpcSetDirFrame(1, 0);
WaitEventAutoScriptRun(2, false, false);
NpcMoveToBlock(24, 88, 1, 3);
EventSetState(-1, -1, 0);

['@7E09'];
NpcSetDirFrame(1, 0);
WaitEventAutoScriptRun(4, false, false);
NpcMoveToBlock(25, 89, 1, 3);
EventSetState(-1, -1, 0);

['@7E0E'];
WaitEventAutoScriptRun(3, false, false);
NpcSetDirFrame(1, 0);
WaitEventAutoScriptRun(4, false, false);
NpcMoveToBlock(24, 89, 0, 3);
EventSetState(-1, -1, 0);

['@7E14'];
WaitEventAutoScriptRun(3, false, false);
NpcSetDirFrame(2, 0);
WaitEventAutoScriptRun(3, false, false);
NpcSetDirFrame(1, 0);
NpcMoveToBlock(18, 85, 1, 3);
EventSetState(-1, -1, 0);

['@7E1B'];
ReplaceAndPause();
NpcSetDirFrame(2, 0);
WaitEventAutoScriptRun(2, false, false);
NpcMoveToBlock(20, 88, 0, 3);
EventSetState(-1, -1, 0);

['@7E21'];
WaitEventAutoScriptRun(3, false, false);
NpcSetDirFrame(1, 0);
WaitEventAutoScriptRun(4, false, false);
NpcSetDirFrame(2, 0);
WaitEventAutoScriptRun(3, false, false);
NpcSetDirFrame(1, 0);
NpcMoveToBlock(21, 90, 0, 3);
EventSetState(-1, -1, 0);

['@7E46'];
SetDlgUpper(45, 0, false);
//未知对话
//未知对话
//未知对话
VideoUpdate(0, false);
SetDlgLower(88, 0, false);
//未知对话
//未知对话
//未知对话
ReplaceAndPause();
SetDlgUpper(0, 0, false);
//未知对话
//未知对话

['@7F4C'];
NpcSetDirFrame(2, 0);
ReplaceAndPause();
NpcMoveToBlockMutexLock(40, 112, 0, 2);
ReplaceAndPause();
NpcSetDirFrame(3, 0);
WaitEventAutoScriptRun(2, false, false);
NpcSetDirFrame(0, 0);

['@7F54'];
EventModifyPos(-1, -1, 48, 8);
NpcMoveToBlock(35, 112, 1, 8);

['@80E7'];
NpcSetDirFrame(3, 0);
NpcSetDirFrame(2, 0);
WaitEventAutoScriptRun(8, false, false);
NpcMoveToBlockMutexLock(36, 50, 1, 2);
NpcMoveToBlockMutexLock(36, 51, 0, 2);
NpcSetDirFrame(3, 0);

['@8173'];
NpcMoveToBlock(37, 52, 0, 3);
NpcSetDirFrame(2, 0);

['@8176'];
NpcMoveToBlockMutexLock(42, 47, 0, 2);

['@8178'];
NpcMoveToBlockMutexLock(42, 47, 0, 2);
EventSetState(-1, -1, 0);

['@817B'];
NpcMoveToBlock(36, 56, 0, 3);
NpcMoveToBlock(38, 53, 1, 3);
NpcMoveToBlock(38, 53, 0, 3);
NpcMoveToBlock(42, 49, 0, 3);
EventSetState(-1, -1, 0);

['@8181'];
NpcMoveToBlock(42, 48, 0, 3);
EventSetState(-1, -1, 0);

['@8184'];
NpcMoveToBlock(42, 46, 0, 3);
EventSetState(-1, -1, 0);

['@8187'];
NpcMoveToBlock(42, 47, 0, 3);
EventSetState(-1, -1, 0);

['@818A'];
NpcMoveToBlock(37, 54, 1, 3);
NpcMoveToBlock(37, 54, 0, 3);
NpcMoveToBlock(42, 49, 0, 3);
EventSetState(-1, -1, 0);

['@818F'];
NpcMoveToBlock(42, 48, 0, 3);
EventSetState(-1, -1, 0);

['@8192'];
NpcMoveToBlock(33, 58, 0, 3);
NpcMoveToBlock(42, 49, 0, 3);
EventSetState(-1, -1, 0);

['@8196'];
NpcMoveToBlock(42, 48, 0, 3);
EventSetState(-1, -1, 0);

['@8199'];
NpcMoveToBlock(33, 56, 0, 3);
NpcMoveToBlock(42, 47, 0, 3);
EventSetState(-1, -1, 0);

['@8250'];
SetDlgLower(73, 0, false);
//未知对话
//未知对话
ReplaceAndPauseWithNop("@8248", 0);

['@8287'];
NpcMoveToBlockMutexLock(35, 70, 0, 2);

['@8289'];
NpcMoveToBlockMutexLock(34, 69, 0, 4);

['@828B'];
NpcMoveToBlock(36, 70, 0, 3);
NpcSetDirFrame(0, 0);

['@828E'];
NpcMoveToBlockMutexLock(35, 70, 1, 2);
NpcSetDirFrame(3, 0);

['@8291'];
NpcMoveToBlock(37, 72, 0, 3);

['@8293'];
NpcMoveToBlock(35, 69, 0, 3);

['@8295'];
NpcMoveToBlock(38, 72, 1, 3);

['@8297'];
NpcMoveToBlock(34, 71, 0, 3);

['@8299'];
NpcMoveToBlock(37, 74, 0, 3);

['@829B'];
EventAnimate(0);
ReplaceAndPauseWithNop("@829B", 6);
EventAnimate(0);
PlaySound(261);
['@829F'];
EventAnimate(0);
ReplaceAndPauseWithNop("@829F", 6);

['@836C'];
ReplaceAndPause();
ReplaceAndPause();
ReplaceAndPause();
ReplaceAndPause();
ReplaceAndPause();
ReplaceAndPause();
ReplaceAndPause();
ReplaceAndPause();
EventModifyPos(-1, -1, 1, 0);
EventModifyPos(-1, -1, -1, 0);
EventModifyPos(-1, -1, 1, 0);
EventModifyPos(-1, -1, -1, 0);
ReplaceAndPause();
ReplaceAndPause();
ReplaceAndPause();
ReplaceAndPause();
ReplaceAndPause();
ReplaceAndPause();
EventModifyPos(-1, -1, 1, 0);
EventModifyPos(-1, -1, -1, 0);
EventModifyPos(-1, -1, 1, 0);
EventModifyPos(-1, -1, -1, 0);
ReplaceAndPauseWithNop("@836C", 4);
EventSetTriggerMode(-1, -1, true, 3);
['Event_00251_00002_Auto'];
NpcChase(128, 4, true);
GotoWithProbability(4, "Event_00251_00002_Auto");
WaitEventAutoScriptRun(10, false, false);
ReplaceAndPauseWithNop("Event_00251_00002_Auto", 0);

['@8413'];
EventSetDirFrame(248, 11, 0, 12);
EventSetDirFrame(248, 12, 0, 12);
WaitEventAutoScriptRun(0, false, false);
EventSetDirFrame(248, 13, 0, 12);
EventSetDirFrame(248, 14, 0, 12);
EventSetDirFrame(248, 15, 0, 12);
WaitEventAutoScriptRun(0, false, false);
EventSetDirFrame(248, 16, 0, 12);
EventSetDirFrame(248, 17, 0, 12);
EventSetDirFrame(248, 18, 0, 12);
EventSetDirFrame(248, 19, 0, 12);
VideoUpdate(0, false);

['@8420'];
EventSetDirFrame(248, 18, 2, 0);
WaitEventAutoScriptRun(0, false, false);
EventSetDirFrame(248, 13, 2, 0);
EventSetDirFrame(248, 19, 2, 0);
WaitEventAutoScriptRun(0, false, false);
EventSetDirFrame(248, 11, 2, 0);
EventSetDirFrame(248, 12, 2, 0);
WaitEventAutoScriptRun(0, false, false);
EventSetDirFrame(248, 14, 2, 0);
WaitEventAutoScriptRun(0, false, false);
EventSetDirFrame(248, 15, 2, 0);
EventSetDirFrame(248, 16, 2, 0);
EventSetDirFrame(248, 17, 2, 0);
WaitEventAutoScriptRun(0, false, false);

['@8531'];
EventSetTriggerMode(-1, -1, false, 1);
SetDlgUpper(0, 0, false);
//未知对话
//未知对话
//未知对话
VideoUpdate(0, false);
SetDlgLower(1, 0, false);
//未知对话
//未知对话
VideoUpdate(0, false);
SetDlgUpper(0, 0, false);
//未知对话
//未知对话
VideoUpdate(0, false);
SetDlgLower(1, 0, false);
//未知对话
//未知对话
VideoUpdate(0, false);
SetDlgUpper(0, 0, false);
//未知对话
//未知对话
NpcSetDirFrame(1, 0);
WaitEventAutoScriptRun(5, false, false);
NpcSetDirFrame(3, 0);
VideoUpdate(0, false);
SetDlgUpper(0, 0, false);
//未知对话
//未知对话
VideoUpdate(0, false);
SetDlgLower(1, 0, false);
//未知对话
//未知对话
//未知对话
EventSetAutoScript(-1, -1, "@856A");
WaitEventAutoScriptRun(10, false, false);
SetDlgUpper(0, 0, false);
//未知对话
//未知对话
//未知对话
//未知对话
ReplaceAndPause();
SetDlgUpper(0, 0, false);
//未知对话
//未知对话
//未知对话
//未知对话
VideoRestore();
//未知对话
//未知对话
//未知对话
//未知对话
ReplaceAndPause();
SetDlgUpper(0, 0, false);
//未知对话
//未知对话
//未知对话

['@856A'];
NpcMoveToBlockMutexLock(46, 94, 0, 4);
NpcSetDirFrame(0, 0);

['@861A'];
NpcMoveToBlock(31, 44, 1, 3);

['@861C'];
NpcMoveToBlock(33, 42, 1, 3);
EventSetState(-1, -1, 0);

['@86B6'];
NpcMoveToBlock(34, 103, 0, 3);
NpcSetDirFrame(0, 0);

['@86E6'];
NpcSetDirFrame(1, 0);
NpcSetDirFrame(2, 0);
NpcSetDirFrame(3, 0);
NpcSetDirFrame(0, 0);

['@86EB'];
//未知对话
//未知对话
VideoUpdate(0, false);
SetDlgLower(0, 0, false);
//未知对话
//未知对话
//未知对话
//未知对话
VideoUpdate(0, false);
EventSetAutoScript(-1, -1, "@86E6");
WaitEventAutoScriptRun(4, false, false);
EventSetState(-1, -1, 0);
EventSetState(273, 7, 2);
PlaySound(263);
FadeToScene(2, -1);
SetDlgUpper(72, 0, false);
//未知对话
//未知对话
//未知对话
VideoUpdate(0, false);
SetDlgLower(1, 0, false);
//未知对话
//未知对话
EventSetState(268, 5, 0);
EventSetTriggerScript(268, 2, "@8709");
EventSetTriggerMode(268, 2, true, 2);
EventSetState(273, 7, 0);
SceneSetScript(269, "@8709", "");
SceneEnter(269);

['@8709'];
EventSetState(268, 2, 0);
EventSetState(268, 3, 1);
EventSetState(269, 0, 1);
PartySetPos(23, 23, 1);
RoleSetDirFrame(2, 0, 0);
ViewportMove(26, 19, 1);
SetDlgLower(72, 0, false);
//未知对话
//未知对话
EventSetDirFrame(268, 4, 0, 0);
WaitEventAutoScriptRun(5, false, false);
EventSetDirFrame(268, 4, 3, 0);
WaitEventAutoScriptRun(5, false, false);
EventSetDirFrame(268, 4, 0, 0);
VideoUpdate(0, false);
SetDlgUpper(74, 0, false);
//未知对话
//未知对话
VideoUpdate(0, false);
SetDlgLower(72, 0, false);
//未知对话
//未知对话
VideoUpdate(0, false);
SetDlgUpper(74, 0, false);
//未知对话
//未知对话
VideoRestore();
//未知对话
//未知对话
VideoUpdate(0, false);
SetDlgLower(72, 0, false);
//未知对话
//未知对话
//未知对话
//未知对话
EventSetDirFrame(268, 3, 1, 0);
VideoUpdate(0, false);
SetDlgLower(75, 0, false);
//未知对话
//未知对话
//未知对话
SetDlgUpper(74, 0, false);
//未知对话
//未知对话
EventSetState(268, 3, 0);
EventSetState(268, 4, 0);
EventSetState(269, 0, 0);
SceneSetScript(274, "@8752", "");
SceneEnter(274);
FadeOut(0);
ReplaceAndPause();

ReplaceAndPause();
NpcSetDirFrame(0, 0);
ReplaceAndPause();
NpcSetDirFrame(1, 0);
ReplaceAndPause();
NpcSetDirFrame(0, 0);
NpcSetDirFrame(3, 0);

['@8745'];
NpcMoveToBlock(34, 90, 0, 3);
NpcMoveToBlock(35, 89, 0, 3);
WaitEventAutoScriptRun(5, false, false);
NpcSetDirFrame(3, 0);

['@874A'];
NpcMoveToBlockMutexLock(34, 90, 0, 2);
NpcMoveToBlockMutexLock(34, 89, 1, 2);
ReplaceAndPause();
NpcSetDirFrame(1, 0);

['@874F'];
NpcMoveToBlockMutexLock(33, 90, 1, 2);
NpcSetDirFrame(2, 0);

['@8752'];
PartySetPos(29, 86, 1);
RoleSetDirFrame(3, 0, 0);
EventSetState(273, 8, 1);
EventSetState(273, 9, 1);
EventSetState(273, 10, 1);
ViewportMove(0, 0, 0);
WaitEventAutoScriptRun(5, false, false);
SetDlgLower(72, 0, false);
//未知对话
//未知对话
EventSetDirFrame(273, 8, 0, 0);
WaitEventAutoScriptRun(2, false, false);
EventSetDirFrame(273, 8, 3, 0);
WaitEventAutoScriptRun(2, false, false);
//未知对话
//未知对话
EventSetAutoScript(273, 10, "@8745");
WaitEventAutoScriptRun(2, false, false);
EventSetAutoScript(273, 9, "@874A");
WaitEventAutoScriptRun(5, false, false);
EventSetAutoScript(273, 8, "@874F");
WaitEventAutoScriptRun(40, false, false);
EventSetDirFrame(273, 8, 2, 0);
PartyWalkToBlock(32, 89, 0, 4);
SetDlgUpper(1, 0, false);
//未知对话
//未知对话
EventSetDirFrame(273, 8, 1, 0);
VideoUpdate(0, false);
SetDlgLower(72, 0, false);
//未知对话
//未知对话
VideoUpdate(0, false);
SetDlgUpper(6, 0, false);
//未知对话
//未知对话
VideoUpdate(0, false);
SetDlgLower(72, 0, false);
//未知对话
//未知对话
//未知对话
//未知对话
VideoUpdate(0, false);
SetDlgUpper(1, 0, false);
//未知对话
//未知对话
//未知对话
VideoUpdate(0, false);
SetDlgLower(72, 0, false);
//未知对话
//未知对话
//未知对话
//未知对话
EventSetDirFrame(273, 10, 0, 0);
VideoUpdate(0, false);
SetDlgLower(74, 0, false);
//未知对话
//未知对话
//未知对话
EventSetDirFrame(1, 0, 2, 0);
VideoUpdate(0, false);
SetDlgUpper(75, 0, false);
//未知对话
//未知对话
//未知对话
EventSetDirFrame(273, 8, 2, 0);
VideoUpdate(0, false);
SetDlgLower(74, 0, false);
//未知对话
//未知对话
//未知对话
VideoUpdate(0, false);
SetDlgUpper(72, 0, false);
//未知对话
//未知对话
//未知对话
//未知对话
//未知对话
VideoUpdate(0, false);
SetDlgLower(74, 0, false);
//未知对话
//未知对话
VideoUpdate(0, false);
SetDlgUpper(72, 0, false);
//未知对话
//未知对话
EventSetAutoScript(273, 5, "@87DA");
EventSetAutoScript(273, 8, "@87DA");
EventSetAutoScript(273, 9, "@87DA");
EventSetAutoScript(273, 10, "@87DA");
EventSetState(266, 7, 2);
EventSetState(274, 0, 2);
WaitEventAutoScriptRun(27, false, false);
RoleSetDirFrame(2, 0, 0);
WaitEventAutoScriptRun(20, false, false);
PartyWalkToBlock(31, 88, 0, 2);
WaitEventAutoScriptRun(4, false, false);
SetDlgLower(55, 0, false);
//未知对话
//未知对话
//未知对话
EventSetDirFrame(274, 0, 0, 0);
VideoUpdate(0, false);
SetDlgLower(0, 0, false);
//未知对话
//未知对话
EventSetAutoScript(274, 0, "@87C9");
ReplaceAndPause();

['@87C9'];
NpcMoveToBlock(13, 102, 0, 3);
NpcMoveToBlock(18, 107, 1, 3);
WaitEventAutoScriptRun(4, false, false);
NpcSetDirFrame(2, 0);
WaitEventAutoScriptRun(16, false, false);
NpcSetDirFrame(3, 0);
WaitEventAutoScriptRun(6, false, false);
NpcMoveToBlock(23, 112, 0, 3);
NpcSetDirFrame(2, 0);
WaitEventAutoScriptRun(10, false, false);
NpcMoveToBlock(11, 100, 0, 3);
WaitEventAutoScriptRun(4, false, false);
NpcSetDirFrame(2, 0);
WaitEventAutoScriptRun(10, false, false);
NpcMoveToBlock(5, 106, 0, 3);
EventSetState(-1, -1, 0);

['@87DA'];
EventModifyPos(-1, -1, 2, -1);
GotoWithNop("@87DA", 320);
EventSetState(-1, -1, 0);

['@87E0'];
NpcMoveToBlock(33, 103, 1, 3);
NpcMoveToBlock(35, 101, 1, 3);
NpcSetDirFrame(1, 0);
ReplaceAndPause();
EventSetState(266, 6, 0);
ReplaceAndPause();
NpcMoveToBlock(34, 100, 1, 3);

['@87E8'];
NpcMoveToBlock(34, 101, 0, 3);

['@8860'];
ReplaceAndPause();
['Event_00267_00008_Trigger'];
SetDlgUpper(85, 0, false);
//未知对话
//未知对话
//未知对话
VideoUpdate(0, false);
RemoveItem(106, 0, "@8860");
SetDlgLower(3, 0, false);
//未知对话
VideoUpdate(0, false);
SetDlgUpper(85, 0, false);
//未知对话
//未知对话
SetDlgBox(0);
//未知对话
AddItem(205, 0);
VideoWave(1, 2);
WaitEventAutoScriptRun(60, false, false);
VideoFadeAndUpdate(-1);
SceneSetScript(204, "@76ED", "");
SceneEnter(204);

['@8B3C'];
EventSetState(-1, -1, 1);
NpcSetFrame(1);

['@8D33'];
EventWalkOneStep(-1, -1, 4, -2);
EventModifyPos(-1, -1, 4, -2);
EventModifyPos(-1, -1, 4, -2);
EventModifyPos(-1, -1, 4, -2);
EventWalkOneStep(-1, -1, 4, -2);
EventModifyPos(-1, -1, 4, -2);
EventModifyPos(-1, -1, 4, -2);
EventModifyPos(-1, -1, 4, -2);
EventModifyPos(-1, -1, 4, -2);
EventModifyPos(-1, -1, 4, -2);
EventModifyPos(-1, -1, 4, -2);
EventModifyPos(-1, -1, 4, -2);
EventModifyPos(-1, -1, 4, -2);
EventModifyPos(-1, -1, 4, -2);
EventModifyPos(-1, -1, 4, -2);
EventModifyPos(-1, -1, 4, -2);
GotoWithNop("@8D33", 0);

['@8D45'];
EventWalkOneStep(-1, -1, -4, 2);
EventModifyPos(-1, -1, -4, 2);
EventModifyPos(-1, -1, -4, 2);
EventModifyPos(-1, -1, -4, 2);
EventWalkOneStep(-1, -1, -4, 2);
EventModifyPos(-1, -1, -4, 2);
EventModifyPos(-1, -1, -4, 2);
EventModifyPos(-1, -1, -4, 2);
EventModifyPos(-1, -1, -4, 2);
EventModifyPos(-1, -1, -4, 2);
EventModifyPos(-1, -1, -4, 2);
EventModifyPos(-1, -1, -4, 2);
EventModifyPos(-1, -1, -4, 2);
EventModifyPos(-1, -1, -4, 2);
EventModifyPos(-1, -1, -4, 2);
EventModifyPos(-1, -1, -4, 2);
GotoWithNop("@8D45", 0);

['@8D57'];
EventWalkOneStep(-1, -1, 8, -4);
EventModifyPos(-1, -1, 8, -4);
EventModifyPos(-1, -1, 8, -4);
EventModifyPos(-1, -1, 8, -4);
EventWalkOneStep(-1, -1, 8, -4);
EventModifyPos(-1, -1, 8, -4);
EventModifyPos(-1, -1, 8, -4);
EventModifyPos(-1, -1, 8, -4);
EventModifyPos(-1, -1, 8, -4);
EventModifyPos(-1, -1, 8, -4);
EventModifyPos(-1, -1, 8, -4);
EventModifyPos(-1, -1, 8, -4);
EventModifyPos(-1, -1, 8, -4);
EventModifyPos(-1, -1, 8, -4);
EventModifyPos(-1, -1, 8, -4);
EventModifyPos(-1, -1, 8, -4);
GotoWithNop("@8D57", 0);

['@8D77'];
NpcSetFrame(4);
WaitEventAutoScriptRun(13, false, false);
ReplaceAndPauseWithNop("Event_00005_00007_Auto", 0);

['@8D80'];
EventAnimate(0);
ReplaceAndPauseWithNop("@8D80", 0);

ReplaceAndPause();
['@8D84'];
EventAnimate(0);
ReplaceAndPauseWithNop("@8D84", 0);

ReplaceAndPause();
['@8D88'];
EventAnimate(0);
ReplaceAndPauseWithNop("@8D88", 0);

['@8E0D'];
RoleSetDirFrame(2, 0, 0);
RoleMoveOneStep(10, -10, 0);
WaitEventAutoScriptRun(0, false, false);
RoleMoveOneStep(6, -6, 0);
WaitEventAutoScriptRun(0, false, false);
RoleMoveOneStep(10, -10, 0);
WaitEventAutoScriptRun(0, false, false);
RoleMoveOneStep(6, -6, 0);
WaitEventAutoScriptRun(0, false, false);
['Event_00205_00002_Trigger'];
RoleSetDirFrame(2, 0, 0);
RoleMoveOneStep(10, -10, 0);
WaitEventAutoScriptRun(0, false, false);
RoleMoveOneStep(6, -6, 0);
WaitEventAutoScriptRun(0, false, false);
RoleMoveOneStep(10, -10, 0);
WaitEventAutoScriptRun(0, false, false);
RoleMoveOneStep(6, -6, 0);
WaitEventAutoScriptRun(0, false, false);
RoleSetDirFrame(2, 0, 0);
RoleMoveOneStep(10, -10, 0);
WaitEventAutoScriptRun(0, false, false);
RoleMoveOneStep(6, -6, 0);
WaitEventAutoScriptRun(0, false, false);
RoleMoveOneStep(10, -10, 0);
WaitEventAutoScriptRun(0, false, false);
RoleMoveOneStep(6, -6, 0);
WaitEventAutoScriptRun(0, false, false);

['@8E29'];
RoleSetDirFrame(0, 0, 0);
RoleMoveOneStep(-10, 10, 0);
WaitEventAutoScriptRun(0, false, false);
RoleMoveOneStep(-6, 6, 0);
WaitEventAutoScriptRun(0, false, false);
RoleMoveOneStep(-10, 10, 0);
WaitEventAutoScriptRun(0, false, false);
RoleMoveOneStep(-6, 6, 0);
WaitEventAutoScriptRun(0, false, false);
['Event_00205_00005_Trigger'];
RoleSetDirFrame(0, 0, 0);
RoleMoveOneStep(-10, 10, 0);
WaitEventAutoScriptRun(0, false, false);
RoleMoveOneStep(-6, 6, 0);
WaitEventAutoScriptRun(0, false, false);
RoleMoveOneStep(-10, 10, 0);
WaitEventAutoScriptRun(0, false, false);
RoleMoveOneStep(-6, 6, 0);
WaitEventAutoScriptRun(0, false, false);
['@8E3B'];
RoleSetDirFrame(0, 1, 0);
RoleMoveOneStep(-10, 10, 0);
WaitEventAutoScriptRun(0, false, false);
RoleMoveOneStep(-6, 6, 0);
WaitEventAutoScriptRun(0, false, false);
RoleMoveOneStep(-10, 10, 0);
WaitEventAutoScriptRun(0, false, false);
RoleMoveOneStep(-6, 6, 0);
WaitEventAutoScriptRun(0, false, false);

['@8E99'];
NpcSetFrame(1);
VideoUpdate(0, false);
PlaySound(78);

['@8EA1'];
NpcSetFrame(3);
NpcSetFrame(2);
NpcSetFrame(1);
NpcSetFrame(0);

['@8EA6'];
PlaySound(113);
NpcSetFrame(1);
NpcSetFrame(2);
NpcSetFrame(3);
NpcSetFrame(4);

['@977C'];
SetDlgBox(0);
//未知对话

['@977F'];
SetDlgBox(0);
//未知对话

SetDlgBox(0);
//未知对话

['@99FE'];
JumpIfRoleNotPoisonedByKind(8, "@9A01");
KillRole();

['@9A01'];
RoleApplyPoison(false, 5);

['@9A06'];
JumpIfRoleNotPoisonedByKind(10, "@9A09");
KillRole();

['@9A09'];
RoleApplyPoison(false, 9);

['@9A0E'];
JumpIfRoleNotPoisonedByKind(5, "@9A11");
KillRole();

['@9A11'];
RoleApplyPoison(false, 8);

['@9A16'];
JumpIfRoleNotPoisonedByKind(7, "@9A19");
KillRole();

['@9A19'];
RoleApplyPoison(false, 6);

['@9A1E'];
JumpIfRoleNotPoisonedByKind(9, "@9A21");
KillRole();

['@9A21'];
RoleApplyPoison(false, 10);

['@9A26'];
JumpIfRoleNotPoisonedByKind(6, "@9A29");
KillRole();

['@9A29'];
RoleApplyPoison(false, 7);

['@9A51'];
KillRole();

['@9AAB'];
SetDlgBox(0);
//未知对话

['@9AD2'];
JumpIfPartyNotFacingEvent(17, 5, 1, "@9AD4");

['@9AD4'];
JumpIfPartyNotFacingEvent(17, 6, 1, "@9AD6");

['@9AD6'];
JumpIfPartyNotFacingEvent(17, 7, 1, "@9AD8");

['@9AD8'];
JumpIfPartyNotFacingEvent(17, 8, 1, "@9ADA");

['@9ADA'];
JumpIfPartyNotFacingEvent(17, 9, 1, "@977C");

['@9AE8'];
SetDlgBox(0);
//未知对话
ScriptFailed();

['@9B26'];
JumpIfPartyNotFacingEvent(137, 2, 1, "@977C");
EventSetTriggerScript(137, 2, "@409A");
RemoveItem(211, 0, "");

['@9B2E'];
JumpIfPartyNotFacingEvent(118, 8, 1, "@9B31");
EventSetTriggerScript(118, 8, "@9B38");

['@9B31'];
VideoUpdate(0, false);
//未知对话
//未知对话
//未知对话
//未知对话
//未知对话

['@9B38'];
EventSetTriggerMode(-1, -1, false, 1);
SetDlgUpper(67, 0, false);
//未知对话
//未知对话
ReplaceAndPauseWithNop("Event_00119_00008_Trigger", 0);

['@9B41'];
JumpIfPartyNotFacingEvent(100, 15, 1, "@977C");
EventSetTriggerScript(100, 15, "@4DE6");
RemoveItem(228, 0, "");

['@9B51'];
JumpIfPartyNotFacingEvent(192, 58, 1, "@977C");
EventSetTriggerScript(192, 58, "@65CE");
RemoveItem(231, 0, "");

['@9B83'];
JumpIfEventStateMatches(241, 4, 0, "");
JumpIfEventStateMatches(241, 5, 0, "");
JumpIfEventStateMatches(241, 6, 0, "");
JumpIfEventStateMatches(241, 7, 0, "");
JumpIfEventStateMatches(241, 8, 0, "");
JumpIfEventStateMatches(241, 4, 2, "");
JumpIfEventStateMatches(241, 5, 2, "");
JumpIfEventStateMatches(241, 6, 2, "");
JumpIfEventStateMatches(241, 7, 2, "");
JumpIfEventStateMatches(241, 8, 2, "");
FadeOut(0);
SceneEnter(228);

['@9B90'];
JumpIfCurrentSceneMatches(179, "@9B93");
GotoWithNop("@977C", 0);

['@9B93'];
VideoUpdate(0, false);
EventSetTriggerScript(186, 4, "@6250");
SceneEnter(181);

['@A005'];
SetDlgLower(18, 0, false);
//未知对话
//未知对话
SetDlgUpper(0, 0, false);
//未知对话
BattleEnemyEscape();
GotoWithProbability(30, "");
SetDlgLower(3, 0, false);
//未知对话
SetDlgUpper(11, 0, false);
//未知对话
//未知对话
//未知对话
//未知对话

['@A071'];
NpcSetStillTime();

['@A073'];
MusicPlay(Music.战斗失败, false, false);
FadeToRed();
SetDlgCenter(0, false);
//未知对话
//未知对话
//未知对话
//未知对话
LoadLastSave();

['@A088'];
NpcChase(0, 8, false);
ReplaceAndPauseWithNop("@A088", 0);

['@A0A7'];
NpcSetVanishTime(0);
FadeOut(0);

['@A144'];
SetDlgUpper(59, 0, false);
//未知对话
//未知对话
//未知对话
//未知对话
VideoUpdate(0, false);
SetDlgLower(9, 0, false);
//未知对话
//未知对话
//未知对话
VideoUpdate(0, false);
SetDlgUpper(59, 0, false);
//未知对话
VideoUpdate(0, false);
SetDlgUpper(59, 0, false);
//未知对话
//未知对话
//未知对话
//未知对话
//未知对话
VideoUpdate(0, false);
SetDlgLower(1, 0, false);
//未知对话
//未知对话
VideoUpdate(0, false);
SetDlgLower(5, 0, false);
//未知对话
//未知对话
//未知对话
VideoUpdate(0, false);
SetDlgUpper(59, 0, false);
//未知对话
//未知对话
//未知对话
//未知对话
VideoUpdate(0, false);
SetDlgLower(16, 0, false);
//未知对话
//未知对话
VideoUpdate(0, false);
SetDlgUpper(59, 0, false);
//未知对话
//未知对话
//未知对话
//未知对话
//未知对话
//未知对话
//未知对话
SetDlgLower(18, 0, false);
//未知对话
//未知对话
VideoUpdate(0, false);
SetDlgUpper(59, 0, false);
//未知对话
//未知对话
VideoUpdate(0, false);
SetDlgUpper(59, 0, false);
//未知对话
//未知对话
VideoUpdate(0, false);
SetDlgLower(16, 0, false);
//未知对话
//未知对话
VideoUpdate(0, false);
SetDlgLower(9, 0, false);
//未知对话
VideoUpdate(0, false);
SetDlgUpper(59, 0, false);
//未知对话
//未知对话
VideoUpdate(0, false);
SetDlgLower(18, 0, false);
//未知对话
//未知对话
VideoUpdate(0, false);
SetDlgLower(5, 0, false);
//未知对话
//未知对话
//未知对话
SetDlgUpper(59, 0, false);
//未知对话
EnemySetScript(88, EnemyScript.TurnStart, "");
ReplaceAndPause();

['@A1CD'];
SetDlgUpper(41, 0, false);
//未知对话
//未知对话
EnemySetMagic(80, 0);
ReplaceAndPause();
PlaySound(193);
EnemySetMagic(-1, 0);
ReplaceAndPause();
EnemySetMagic(46, 0);
ReplaceAndPause();

['@A201'];
SetDlgUpper(60, 0, false);
//未知对话
//未知对话
VideoUpdate(0, false);
SetDlgLower(44, 0, false);
//未知对话
//未知对话
//未知对话
VideoUpdate(0, false);
SetDlgUpper(60, 0, false);
//未知对话
//未知对话
//未知对话
EnemySetMagic(77, 0);
ReplaceAndPause();
ReplaceAndPause();
EnemySetMagic(32, 0);
ReplaceAndPause();
EnemySetMagic(-1, 0);
ReplaceAndPause();
EnemySetMagic(-1, 0);
BattleSetResult(BattleResult.脚本结束);

['@A5A3'];
EnemySetMagic(72, 3);
ReplaceAndPauseWithNop("Enemy_00142_TurnStart", 0);

['@A5A6'];
EnemySetMagic(53, 4);
ReplaceAndPauseWithNop("Enemy_00142_TurnStart", 0);

['@A81F'];
RoleApplyPoison(true, 10);

['@A827'];
RoleApplyPoison(true, 5);

['@A832'];
SetDlgBox(0);
//未知对话
ScriptFailed();

['@A838'];
SetDlgBox(0);
//未知对话
ScriptFailed();

['@A840'];
SetDlgBox(0);
//未知对话

['@A846'];
SetDlgCenter(0, false);
//未知对话
ScriptFailed();

['@A851'];
GotoWithProbability(70, "@A840");
GotoWithNop("Item_00067_Use", 0);

['@A858'];
GotoWithProbability(50, "@A840");
GotoWithNop("Item_00068_Use", 0);

['@A873'];
GotoWithProbability(30, "@A840");
KillRole();

['@A974'];
SetDlgLower(2, 0, false);
//未知对话
SetDlgUpper(15, 0, false);
//未知对话
//未知对话

['@A97A'];
SetDlgLower(2, 0, false);
//未知对话
//未知对话
SetDlgUpper(11, 0, false);
//未知对话
//未知对话

['@A981'];
SetDlgUpper(15, 0, false);
//未知对话
//未知对话
SetDlgLower(9, 0, false);
//未知对话
//未知对话

['@A98E'];
SetDlgLower(24, 0, false);
//未知对话

['@A991'];
SetDlgUpper(22, 0, false);
//未知对话
//未知对话
SetDlgLower(8, 0, false);
//未知对话
VideoUpdate(0, false);
SetDlgUpper(22, 0, false);
//未知对话
SetDlgLower(10, 0, false);
//未知对话

['@A99C'];
SetDlgUpper(22, 0, false);
//未知对话
//未知对话
SetDlgLower(9, 0, false);
//未知对话

GotoWithProbability(75, "@A9A8");
GotoWithProbability(66, "@A9AC");
GotoWithProbability(50, "@A9AF");
SetDlgLower(31, 0, false);
//未知对话

['@A9A8'];
SetDlgUpper(31, 0, false);
//未知对话
//未知对话

['@A9AC'];
SetDlgLower(31, 0, false);
//未知对话

['@A9AF'];
SetDlgLower(2, 0, false);
//未知对话
SetDlgUpper(31, 0, false);
//未知对话
//未知对话

['@A9BF'];
SetDlgLower(5, 0, false);
//未知对话
SetDlgBox(0);
//未知对话
RoleModifyMP(false, 9999);
RoleModifyAttrTemp(Attribute.AttrMagicStrength, 10, 0);

['@A9C6'];
SetDlgLower(5, 0, false);
//未知对话
SetDlgBox(0);
//未知对话
RoleModifyAttrTemp(Attribute.AttrAttackStrength, 25, 0);
RoleModifyAttrTemp(Attribute.AttrMagicStrength, 25, 0);

['@A9CD'];
SetDlgLower(10, 0, false);
//未知对话
RoleModifyAttrTemp(Attribute.AttrDexterity, 90, 0);
RoleModifyAttrTemp(Attribute.AttrFleeRate, 90, 0);

['@A9DC'];
SetDlgLower(23, 0, false);
//未知对话
SetDlgBox(0);
//未知对话
RoleModifyHP(false, 9999);
RoleModifyAttrTemp(Attribute.AttrAttackStrength, 5, 0);

['@A9E3'];
SetDlgLower(22, 0, false);
//未知对话
SetDlgBox(0);
//未知对话
RoleModifyMP(false, 9999);
RoleModifyAttrTemp(Attribute.AttrMagicStrength, 9, 0);

['@A9EA'];
SetDlgLower(24, 0, false);
//未知对话
RoleModifyAttrTemp(Attribute.AttrDexterity, 50, 0);
RoleModifyAttrTemp(Attribute.AttrFleeRate, 90, 0);

['@A9F3'];
EventSetTriggerScript(180, 2, "Event_00181_00002_Trigger");
EventSetState(182, 2, 1);
GotoWithNop("@6B39", 0);

['@A9F7'];
VideoUpdate(0, false);
GotoWithNop("@387E", 0);

['@A9FA'];
//未知对话
//未知对话
EventModifyPos(84, 27, -32, 0);
VideoUpdate(0, false);
EventSetAutoScript(84, 27, "Event_00006_00014_Auto");
EventSetTriggerScript(84, 27, "@3A97");
EventSetTriggerScript(84, 29, "@3A97");
ReplaceAndPause();
GotoWithNop("@3A97", 0);

['@AA04'];
//未知对话
//未知对话
EventModifyPos(84, 27, -32, 0);
VideoUpdate(0, false);
EventSetAutoScript(84, 27, "Event_00006_00014_Auto");
EventSetTriggerScript(84, 27, "@3A97");
EventSetTriggerScript(84, 28, "@3A97");
ReplaceAndPause();
GotoWithNop("@3A97", 0);

['@AA0E'];
RemoveItem(92, 36, "");
EventSetStateSequence(215, 5, 215, 11, 0);
GotoWithNop("@6F08", 0);

['@AA12'];
JumpIfEnemyHPMoreThanPercentage(5, "@977C");
KillEnemy();

['@AA15'];
VideoUpdate(0, false);
//未知对话
ReplaceAndPause();
['@AA18'];
//未知对话
//未知对话
GotoWithSelect("@AA15");
CashModify(-100, "@AA15");
VideoUpdate(0, false);
//未知对话
//未知对话
EventSetAutoScript(84, 11, "@3904");
EventSetAutoScript(84, 12, "@3908");
EventSetTriggerScript(84, 11, "@3901");
ReplaceAndPause();
GotoWithNop("@3901", 0);

