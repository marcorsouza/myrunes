var Stats = function()
{
    self = this;
   
    var points = 0;
    self.resultado=ko.observable("");
    self.runeGrade= ko.observable("6");

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

    var getAtk = function(){return _atk();}
    var getHp = function(){return _hp();}
    var getDef = function(){return _def();}
    var getAcc = function(){return _acc();}
    var getRes = function(){return _res();}
    var getCd = function(){return _cd();}
    var getSpd = function(){return _spd() * 1.33;}
    var getCr = function(){return _cr() * 1.33;}
    var getFatk = function(){return _fatk() / 10;}
    var getFdef = function(){return _fhp() / 10;}
    var getFhp = function(){return _fdef() / 100;}

    /* Rune efficiency */

    var getRuneEffAtk = function(){
        if (_atk() == 0) return 0; console.log(Math.round(_runeGrade() == 6 ? _atk() / 8 : _atk() / 7));   return  parseFloat((_runeGrade() == 6 ? _atk() / 8 : _atk() / 7));}

    var getRuneEffHp = function(){if (_hp() == 0) return 0; return parseFloat((_runeGrade() == 6 ? _hp() / 8 : _hp() / 7));}

    var getRuneEffDef = function(){if (_def() == 0) return 0; return parseFloat((_runeGrade() == 6 ? _def() / 8 : _def() / 7));}


    var getRuneEffAcc = function(){if (_acc() == 0) return 0; return parseFloat((_runeGrade() == 6  ? _acc() / 8 : _acc() / 7));}

    var getRuneEffRes = function(){if (_res() == 0) return 0; return parseFloat((_runeGrade() == 6  ? _res() / 8 : _res() / 7));}

    var getRuneEffCd = function(){if (_cd() == 0) return 0; return parseFloat((_runeGrade() == 6  ? _cd() / 7 : _cd() / 5));}

    var getRuneEffSpd = function(){if ( _spd() == 0) return 0; return parseFloat((_runeGrade() == 6 ?  _spd() / 6 : _spd() / 5));}

    var getRuneEffCr = function(){if (_cr() == 0) return 0; return parseFloat((_runeGrade() == 6 ? _cr() / 6 : _cr() / 5));}

    var getRuneEffFatk = function(){if (_fatk() == 0) return 0;return parseFloat((_runeGrade() == 6  ? _fatk() / 20 : _fatk() / 5));}

    var getRuneEffFdef = function(){if (_fdef() == 0) return 0;return parseFloat((_runeGrade() == 6 ? _fdef() / 20 : _fdef() / 5));}

    var getRuneEffFhp = function(){if (_fhp() == 0) return 0; return parseFloat((_runeGrade() == 6 ? _fhp() / 375 : _fhp() / 300));}

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
