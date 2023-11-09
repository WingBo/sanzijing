const szjData = {
    "title": "三字经",
    "tags": "新版",
    "content": [
        "人之初，性本善，性相近，习相远。",
        "茍不教，性乃迁，教之道，贵以专。",
        "昔孟母，择邻处，子不学，断机杼。",
        "窦燕山，有义方，教五子，名俱扬。",
        "养不教，父之过，教不严，师之惰。",
        "子不学，非所宜，幼不学，老何为？",
        "玉不琢，不成器，人不学，不知义。",
        "为人子，方少时，亲师友，习礼仪。",
        "香九龄，能温席，孝于亲，所当执。",
        "融四岁，能让梨，弟于长，宜先知。",
        "首孝弟，次见闻，知某数，识某文。",
        "一而十，十而百，百而千，千而万。",
        "三才者，天地人，三光者，日月星。",
        "三纲者，君臣义，父子亲，夫妇顺。",
        "曰春夏，曰秋冬，此四时，运不穷。",
        "曰南北，曰西东，此四方，应乎中。",
        "曰水火，木金土，此五行，本乎数。",
        "十干者，甲至癸，十二支，子至亥。",
        "曰黄道，日所躔，曰赤道，当中权。",
        "赤道下，温暖极，我中华，在东北。",
        "寒燠均，霜露改，右高原，左大海。",
        "曰江河，曰淮济，此四渎，水之纪。",
        "曰岱华，嵩恒衡，此五岳，山之名。",
        "古九州，今改制，称行省，三十五。",
        "曰士农，曰工商，此四民，国之良。",
        "地所生，有草木，此植物，遍水陆。",
        "有虫鱼，有鸟兽，此动物，能飞走。",
        "稻粱菽，麦黍稷，此六谷，人所食。",
        "马牛羊，鸡犬豕，此六畜，人所饲。",
        "曰喜怒，曰哀惧，爱恶欲，七情具。",
        "曰仁义，礼智信，此五常，不容紊。",
        "青赤黄，及白黑，此五色，目所识。",
        "酸甘甘，及辛咸，此五味，口所含。",
        "膻焦香，及腥朽，此五臭，鼻所嗅。",
        "宫商角，及征羽，此五音，耳所取。",
        "匏土革，木石金，与丝竹，乃八音。",
        "曰平上，曰去入，此四声，宜调叶。",
        "九族者，序宗亲，高曾祖，父而身。",
        "身而子，子而孙，自子孙，至曾玄。",
        "五伦者，始夫妇，父子先，君臣后。",
        "次兄弟，及朋友，当顺叙，勿违背。",
        "有伯叔，有舅甥，婿妇翁，三党名。",
        "凡训蒙，须讲究，详训故，明句读。",
        "礼乐射，御书数，古六艺，今不具。",
        "帷书学，人共遵，既识字，讲说文。",
        "有古文，大小篆，隶草继，不可乱。",
        "若广学，惧其繁，但略说，能知源。",
        "为学者，必有初，小学终，至四书。",
        "论语者，二十篇，群弟子，记善言。",
        "孟子者，七篇止，辨王载，说仁义。",
        "中庸者，子思笔，中不偏，庸不易。",
        "大学者，乃曾子，自修齐，至治平。",
        "此二篇，在礼记，今单行，至治平。",
        "四书通，孝经熟，如六经，始可读。",
        "六经者，统儒术，文作周，孔子述。",
        "易诗书，礼春秋，乐经亡，余可求。",
        "有连山，有归藏，有周易，三易详。",
        "有典谟，有训诰，有誓命，书之奥。",
        "有国风，有雅颂，号四诗，当讽诵。",
        "周礼者，箸六官，仪礼者，十七篇。",
        "大小戴，集礼记，述圣言，礼法备。",
        "王迹息，春秋作，寓褒贬，别善恶。",
        "王传者，有公羊，有左氏，有谷梁。",
        "尔雅者，善辨言，求经训，此莫先。",
        "古圣著，先贤传，注疏备，十三经。",
        "左传外，有国语，合群经，数十五。",
        "经既明，方读子，撮其要，记其事。",
        "古九流，多亡佚，取五种，修文质。",
        "五子者，有荀扬，文中子，及老庄。",
        "经子通，读诸史，考世系，知终始。",
        "自羲农，至黄帝，号三皇，在上世。",
        "尧舜兴，禅尊位，号唐虞，为二帝。",
        "夏有禹，商有汤，周文武，称三王。",
        "夏传子，家天下，四百载，迁夏社。",
        "汤伐夏，国号商，六百载，至纣亡。",
        "周武王，始诛纣，八百载，最长久。",
        "周共和，始纪年，历宣幽，遂东迁。",
        "周道衰，王纳坠，逞士戈，尚游说。",
        "始春秋，终战国，五霸强，七雄出。",
        "蠃秦氏，始兼并，传二世，楚汉争。",
        "高祖兴，汉业建，至孝平，王莽篡。",
        "先武兴，为东汉，四百年，终于献。",
        "魏蜀吴，争汉鼎，号三国，迄两晋。",
        "宋齐继，梁陈承，为南朝，都金陵。",
        "北元魏，分东西，宇文周，与高齐。",
        "迨至隋，一土宇，不再传，失统绪。",
        "唐高祖，起义师，除隋乱，创国基。",
        "二十传，三百载，梁灭之，国乃改。",
        "梁唐晋，及汉周，称五代，皆有由。",
        "赵宋兴，受周祥，十八传，南北混。",
        "辽兴金，皆夷裔，元灭之，绝宋世。",
        "莅中国，兼戎狄，九十年，返沙碛。",
        "太祖兴，称大明，纪洪武，都金陵。",
        "迨成祖，迁宛平，十六世，至崇祯。",
        "权阉肆，流寇起，自成入，神器毁。",
        "清太祖，兴辽东，金之后，受明封。",
        "至世祖，乃大同，十二世，清祚终。",
        "凡正史，廿四部，益以清，成廿五。",
        "史虽繁，读有次，史记一，汉书二。",
        "后汉三，国志四，此四史，最精致。",
        "先四史，兼证经，参通鉴，约而精。",
        "历代事，全在兹，载治乱，知兴衰。",
        "读史者，考实录，通古今，若亲目。",
        "汉贾董，及许郑，皆经师，能述圣。",
        "宋周程，张朱陆，明王氏，皆道学。",
        "屈原赋，本风人，逮邹枚，暨卿云。",
        "韩与柳，并文雄，李若杜，为诗宗。",
        "凡学者，宜兼通，翼圣教，振民风。",
        "口而诵，心而帷，朝于斯，夕于斯。",
        "昔仲尼，师项橐，古圣贤，尚勤学。",
        "赵中令，读鲁论，彼既仕，学且勤。",
        "披薄编，削竹简，彼无书，且知勉。",
        "头悬梁，锥刺股，彼不教，自勤苦。",
        "如囊萤，如映雪，家虽贫，学不辍。",
        "如负薪，如挂角，身虽劳，犹苦卓。",
        "苏明允，二十七，始发愤，读书籍。",
        "彼既老，犹悔迟，尔小生，宜早思。",
        "若荀卿，年五十，游稷下，习儒业。",
        "彼既成，众称异，尔小生，宜立志。",
        "莹八岁，能咏诗，泌七岁，能赋棋。",
        "彼颖悟，人称奇，尔幼学，当效之。",
        "蔡文姬，能辩琴，谢道韫，能咏吟。",
        "彼女子，且聪敏，尔男子，当自警。",
        "唐刘晏，方七岁，举神童，作正字。",
        "彼虽幼，身已仕，尔细学，勉而致。",
        "犬守夜，鸡司晨，茍不学，曷为人？",
        "蚕吐丝，蜂酿蜜，人不学，不如物。",
        "幼习业，壮致身，上匡国，下利民。",
        "扬名声，显父母，光于前，裕于后。",
        "人遗子，金满籯，我教子，帷一经。",
        "勤有功，戏无益，戒之哉，宜勉力。"
    ]
}