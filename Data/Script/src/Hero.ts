['Hero_00002_Dying'];
GotoWithProbability(75, "@A974");
GotoWithProbability(66, "@A97A");
GotoWithProbability(50, "@A981");
SetDlgLower(15, 0, false);
//未知对话

['Hero_00003_Dying'];
GotoWithProbability(75, "@A98E");
GotoWithProbability(66, "@A991");
GotoWithProbability(50, "@A99C");
SetDlgUpper(24, 0, false);
//未知对话

['Hero_00001_Death'];
GotoWithProbability(75, "@A9BF");
GotoWithProbability(66, "@A9C6");
GotoWithProbability(50, "@A9CD");
SetDlgLower(5, 0, false);
//未知对话
SetDlgBox(0);
//未知对话
RoleModifyHP(false, 9999);
RoleModifyAttrTemp(Attribute.AttrAttackStrength, 5, 0);

['Hero_00003_Death'];
GotoWithProbability(75, "@A9DC");
GotoWithProbability(66, "@A9E3");
GotoWithProbability(50, "@A9EA");
SetDlgLower(23, 0, false);
//未知对话
SetDlgBox(0);
//未知对话
RoleModifyAttrTemp(Attribute.AttrAttackStrength, 25, 0);
RoleModifyAttrTemp(Attribute.AttrMagicStrength, 25, 0);

