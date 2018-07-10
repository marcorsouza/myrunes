var Stats = function()
{
    self = this;
   
    var points = 0;
    self.resultado=ko.observable("");

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

    var getAtk = function(){return parseInt(self.atk());}

    var getHp = function(){return parseInt(self.hp());}

    var getDef = function(){return parseInt(self.def());}

    var getAcc = function(){return parseInt(self.acc());}

    var getRes = function(){return parseInt(self.res());}

    var getCd = function(){return parseInt(self.cd());}

    var getSpd = function(){return parseInt(self.spd() * 1.33);}

    var getCr = function(){return parseInt(self.cr() * 1.33);}

    var getFatk = function(){return parseInt(self.fatk() / 10);}

    var getFdef = function(){return parseInt(self.fdef() / 10);}

    var getFhp = function(){return parseInt(self.fhp() / 100);}

    var pValues = function(){
        return getAtk() + getHp() + getDef() + getAcc() + getRes() + getCd();
    } 

    var pOthers = function(){
        return getSpd() + getCr() + getFatk() + getFdef() + getFhp();
    } 

    self.getRunePoints = function(){
        points = pValues() + pOthers();
        self.resultado("A nota da runa é: "+points);
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
    }
}