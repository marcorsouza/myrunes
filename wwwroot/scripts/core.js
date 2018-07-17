var Stats = function()
{
    self = this;
   
    var points = 0;
    self.resultado=ko.observable("");
    self.runeGrade= ko.observable("6");

    self.availableRunes = ko.observableArray([5,6]);

    self.spd= ko.observable("0");
    self.cr=ko.observable("0");
    self.fatk=ko.observable("0");
    self.fdef=ko.observable("0");
    self.fhp=ko.observable("0");
    self.atk=ko.observable("0");
    self.hp=ko.observable("0");
    self.def=ko.observable("0");
    self.acc=ko.observable("0");
    self.res=ko.observable("0");
    self.cd=ko.observable("0");

    var _runeGrade = function(){ return parseInt(self.runeGrade()); };

    var _atk = function(){ return parseInt(self.atk()); };
    var _hp = function(){ return parseInt(self.hp()); };
    var _def = function(){ return parseInt(self.def()); };

    var _acc = function(){ return parseInt(self.acc()); };
    var _res = function(){ return parseInt(self.res()); };

    var _cd = function(){ return parseInt(self.cd()); };
    var _spd = function(){ return parseInt(self.spd()); };
    var _cr = function(){ return parseInt(self.cr()); };

    var _fatk = function(){ return parseInt(self.fatk()); };
    var _fhp = function(){ return parseInt(self.fhp()); };
    var _fdef = function(){ return parseInt(self.fdef()); };

    /* Rune Points */
    var getAtk = function(){return _atk();}
    var getHp = function(){return _hp();}
    var getDef = function(){return _def();}
    var getAcc = function(){return _acc();}
    var getRes = function(){return _res();}
    var getCd = function(){return _cd();}
    var getSpd = function(){return _spd() * 1.33;}
    var getCr = function(){return _cr() * 1.33;}
    var getFatk = function(){return _fatk() / 10;}
    var getFdef = function(){return _fdef() / 10;}
    var getFhp = function(){return _fhp() / 100;}

    /* Rune efficiency */
    var getRuneEffAtk = function(){ return calcEffiencySubStats(_atk(), 8, 7); }

    var getRuneEffHp = function(){ return calcEffiencySubStats(_hp(), 8, 7); }

    var getRuneEffDef = function(){ return calcEffiencySubStats(_def(), 8, 7); }

    var getRuneEffAcc = function(){ return calcEffiencySubStats(_acc(), 8, 7); }

    var getRuneEffRes = function(){ return calcEffiencySubStats(_res(), 8, 7); }

    var getRuneEffCd = function(){ return calcEffiencySubStats(_cd(), 7, 5); }

    var getRuneEffSpd = function(){ return calcEffiencySubStats(_spd(), 6, 5); 

    var getRuneEffCr = function(){ return calcEffiencySubStats(_cr(), 6, 5); }

    var getRuneEffFatk = function(){ return calcEffiencySubStats(_fatk(), 20, 5); }

    var getRuneEffFdef = function(){ return calcEffiencySubStats(_fdef(), 20, 5); }

    var getRuneEffFhp = function(){ return calcEffiencySubStats(_fhp(), 375, 300); }

    var isRune6 = function(){
        return _runeGrade() == 6;
    }

    var calcEffiencySubStats = function(valueSubStats, param6, param5)
    {
        if(valueSubStats == 0)
            return 0;

        return parseFloat(isRune6() ? valueSubStats / param6 : valueSubStats / param5 );
    }

    var pValues = function(){
        return getAtk() + getHp() + getDef() + getAcc() + getRes() + getCd();
    } 

    var pOthers = function(){
        return getSpd() + getCr() + getFatk() + getFdef() + getFhp();
    } 

    var pEfficiencyRune = function(){
        var sum = getRuneEffAtk() + getRuneEffHp() + getRuneEffDef() +
        getRuneEffAcc() + getRuneEffRes() + getRuneEffCd() +
        getRuneEffSpd() + getRuneEffCr() + getRuneEffFatk() +
        getRuneEffFdef() + getRuneEffFhp();
        sum = Math.round( (sum*100/9) * 100) / 100;
        return sum;
    }

    self.getRunePoints = function(){
        console.log(_runeGrade());
        points = pValues() + pOthers();

        var runes = pEfficiencyRune();

        self.resultado("A nota da runa é: "+points+" / eficiência: "+ runes +"%");
        self.clear();
    }

    self.clear = function(){
        self.spd("0");
        self.cr("0");
        self.fatk("0");
        self.fdef("0");
        self.fhp("0");
        self.atk("0");
        self.hp("0");
        self.def("0");
        self.acc("0");
        self.res("0");
        self.cd("0");
        self.runeGrade("6");
    }
}
