                                    (function (lib, img, cjs) {

var p; // shortcut to reference prototypes

// library properties
lib.properties = {
    width: 300,
    height: 600,
    fps: 24,
    color: '#FFFFFF',
};



// symbols:



(lib.bg = function() {
	this.initialize(img.bg);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,300,600);





(lib.white_bg = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("A0JG4IAAtvMAoTAAAIAANvg");
	this.shape.setTransform(129,44);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,258,88);


(lib.stub = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// stub
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(255,255,0,0)").s().p("AyvJYIAAyvMAlfAAAIAASvg");
	this.shape.setTransform(120,60);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,240,120);


(lib.slash = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#000000").s().p("Aj5AKIAAgTIHzAAIAAATg");
	this.shape.setTransform(25,1);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,50,2);


(lib.image = function() {
    this.initialize();
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,110,110);


(lib.div_shape = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#000000").ss(1,1,1).p("AldAAIK7AA");
	this.shape.setTransform(35,0);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-1,-1,72,2);


(lib.button = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#00FF00").s().p("A13GQIAAsfMArvAAAIAAMfg");
	this.shape.setTransform(140,40);
	this.shape._off = true;

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(3).to({_off:false},0).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = null;


(lib.stroke_shape = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#000000").s().p("A0THCIAAuDMAonAAAIAAODg");
	this.shape.setTransform(130,45);
    this.shape.set({ drawPath: "A0THCIAAuDMAonAAAIAAODg"});
    this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,260,90);


(lib.percent_shape = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#000000").s().p("AkSBkIAAjHIIlAAIAADHg");
	this.shape.setTransform(27.5,10);
    this.shape.set({ drawPath: "AkSBkIAAjHIIlAAIAADHg"});
    this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,55,20);


(lib.nav_shape = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#000000").s().p("AgnAAIBPgxIAABjg");
	this.shape.setTransform(4,5,1.006,1.005);
    this.shape.set({ drawPath: "AgnAAIBPgxIAABjg"});
    this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,8,10);


(lib.cta_shape = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#000000").s().p("AolCCIAAkDIRLAAIAAEDg");
	this.shape.setTransform(55,13);
    this.shape.set({ drawPath: "AolCCIAAkDIRLAAIAAEDg"});
    this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,110,26);


(lib.text = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// slash
	this.slash = new lib.slash();
	this.slash.name = "slash";
	this.slash.parent = this;
	this.slash.setTransform(22,31,1,1,0,0,0,20,1);

	this.timeline.addTween(cjs.Tween.get(this.slash).wait(1));

	// sale_price
	this.sale_price = new cjs.Text("$138", "bold 14px 'Montserrat'", "#FF0000");
    this.sale_price.set({ designHeight: 21.05});
    this.sale_price.name = "sale_price";
	this.sale_price.lineHeight = 17;
	this.sale_price.lineWidth = 106;
	this.sale_price.parent = this;
	this.sale_price.setTransform(2,2);

	this.timeline.addTween(cjs.Tween.get(this.sale_price).wait(1));

	// text
	this.title = new cjs.Text("Green Freak Subscription\nmore text\nmore text", "12px 'Montserrat'");
    this.title.set({ designHeight: 62.4});
    this.title.name = "title";
	this.title.lineHeight = 14;
	this.title.lineWidth = 106;
	this.title.parent = this;
	this.title.setTransform(2,44);

	this.price = new cjs.Text("$138", "bold 14px 'Montserrat'");
    this.price.set({ designHeight: 21.05});
    this.price.name = "price";
	this.price.lineHeight = 17;
	this.price.lineWidth = 106;
	this.price.parent = this;
	this.price.setTransform(2,22);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.price},{t:this.title}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,110,104.4);


(lib.percent_off = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_0 = function() {
		var root = this;
		this.onSetText = function(evt) {
			root.visible = true;
			if ( root.percent_off.text == '') {
				root.visible = false;
			}
		};
		this.addEventListener( "onSetDynamicText", root.onSetText);
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(1));

	// text
	this.percent_off = new cjs.Text("50% OFF", "bold 10px 'Montserrat'", "#FFFFFF");
    this.percent_off.set({ designHeight: 16.2});
    this.percent_off.name = "percent_off";
	this.percent_off.textAlign = "center";
	this.percent_off.lineHeight = 12;
	this.percent_off.lineWidth = 50;
	this.percent_off.parent = this;
	this.percent_off.setTransform(27.5,3.9);

	this.timeline.addTween(cjs.Tween.get(this.percent_off).wait(1));

	// bg
	this.instance = new lib.percent_shape();
	this.instance.parent = this;
	this.instance.setTransform(25,10,1,1,0,0,0,25,10);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,55,20);


(lib.nav = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.nav_shape = new lib.nav_shape();
	this.nav_shape.name = "nav_shape";
	this.nav_shape.parent = this;
	this.nav_shape.setTransform(4,5,1,1,0,0,0,4,5);

	this.shape = new cjs.Shape();
	this.shape.graphics.f("#999999").s().p("AiVCWIAAkrIErAAIAAErg");
	this.shape.setTransform(5,5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.nav_shape,p:{alpha:1}}]}).to({state:[{t:this.nav_shape,p:{alpha:0.5}}]},1).to({state:[{t:this.nav_shape,p:{alpha:1}}]},1).to({state:[{t:this.shape}]},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,8,10);


(lib.dscblank = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_0 = function() {
		this.stop();
	}
	this.frame_5 = function() {
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(5).call(this.frame_5).wait(1));

	// percent_off
	this.percent_off = new lib.percent_off();
	this.percent_off.name = "percent_off";
	this.percent_off.parent = this;
	this.percent_off.setTransform(251.5,13.6,1,1,0,0,0,27,10);

	this.timeline.addTween(cjs.Tween.get(this.percent_off).wait(6));

	// image
	this.image = new lib.image();
	this.image.name = "image";
	this.image.parent = this;
	this.image.setTransform(75,65,1,1,0,0,0,60,60);

	this.timeline.addTween(cjs.Tween.get(this.image).wait(6));

	// text
	this.text = new lib.text();
	this.text.name = "text";
	this.text.parent = this;
	this.text.setTransform(215,33.1,1,1,0,0,0,60,30.1);

	this.timeline.addTween(cjs.Tween.get(this.text).wait(6));

	// div_shape
	this.div_shape = new lib.div_shape();
	this.div_shape.name = "div_shape";
	this.div_shape.parent = this;
	this.div_shape.setTransform(140,95.7,1.429,1,90,0,0,60,0);
	this.div_shape.alpha = 0.102;

	this.timeline.addTween(cjs.Tween.get(this.div_shape).wait(6));

	// white_bg
	this.white_bg = new lib.white_bg();
	this.white_bg.name = "white_bg";
	this.white_bg.parent = this;
	this.white_bg.setTransform(71.1,141.8,1.077,1.341,0,0,0,65,105);

	this.timeline.addTween(cjs.Tween.get(this.white_bg).wait(6));

	// stroke_shape
	this.stroke_shape = new lib.stroke_shape();
	this.stroke_shape.name = "stroke_shape";
	this.stroke_shape.parent = this;
	this.stroke_shape.setTransform(71.1,141.4,1.077,1.333,0,0,0,66,106);
	this.stroke_shape.alpha = 0.102;

	this.timeline.addTween(cjs.Tween.get(this.stroke_shape).wait(6));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,280,120);


(lib.cta = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// text
	this.cta = new cjs.Text("SHOP NOW", "bold 13px 'Montserrat'", "#FFFFFF");
    this.cta.set({ designHeight: 19.85});
    this.cta.name = "cta";
	this.cta.textAlign = "center";
	this.cta.lineHeight = 18;
	this.cta.lineWidth = 116;
	this.cta.parent = this;
	this.cta.setTransform(56,5);

	this.timeline.addTween(cjs.Tween.get(this.cta).wait(1));

	// cta bg
	this.cta_shape = new lib.cta_shape();
	this.cta_shape.name = "cta_shape";
	this.cta_shape.parent = this;
	this.cta_shape.setTransform(61.1,13,1.182,1,0,0,0,60.1,13);

	this.timeline.addTween(cjs.Tween.get(this.cta_shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-10,0,130,26);


(lib.dsc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_0 = function() {
		this.stop();
	}
	this.frame_5 = function() {
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(5).call(this.frame_5).wait(1));

	// button
	this.button = new lib.button();
	this.button.name = "button";
	this.button.parent = this;
	this.button.setTransform(65.8,159,1,1.5,0,0,0,65.8,106);
	new cjs.ButtonHelper(this.button, 0, 1, 2, false, new lib.button(), 3);

	this.timeline.addTween(cjs.Tween.get(this.button).wait(6));

	// percent_off
	this.percent_off = new lib.percent_off();
	this.percent_off.name = "percent_off";
	this.percent_off.parent = this;
	this.percent_off.setTransform(251.5,13.6,1,1,0,0,0,27,10);

	this.timeline.addTween(cjs.Tween.get(this.percent_off).wait(6));

	// cta
	this.action = new lib.cta();
	this.action.name = "action";
	this.action.parent = this;
	this.action.setTransform(70,60,1,1,0,0,0,55,13);
	this.action.alpha = 0;

	this.timeline.addTween(cjs.Tween.get(this.action).wait(1).to({alpha:0.28},0).wait(1).to({alpha:0.52},0).wait(1).to({alpha:0.72},0).wait(1).to({alpha:0.88},0).wait(1).to({alpha:1},0).wait(1));

	// image
	this.image = new lib.image();
	this.image.name = "image";
	this.image.parent = this;
	this.image.setTransform(75,65,1,1,0,0,0,60,60);

	this.timeline.addTween(cjs.Tween.get(this.image).wait(1).to({regX:55,regY:55,x:70,y:60,alpha:0.776},0).wait(1).to({alpha:0.584},0).wait(1).to({alpha:0.424},0).wait(1).to({alpha:0.296},0).wait(1).to({alpha:0.2},0).wait(1));

	// text
	this.text = new lib.text();
	this.text.name = "text";
	this.text.parent = this;
	this.text.setTransform(215,33.1,1,1,0,0,0,60,30.1);

	this.timeline.addTween(cjs.Tween.get(this.text).wait(6));

	// div_shape
	this.div_shape = new lib.div_shape();
	this.div_shape.name = "div_shape";
	this.div_shape.parent = this;
	this.div_shape.setTransform(140,95.7,1.429,1,90,0,0,60,0);
	this.div_shape.alpha = 0.102;

	this.timeline.addTween(cjs.Tween.get(this.div_shape).wait(6));

	// white_bg
	this.white_bg = new lib.white_bg();
	this.white_bg.name = "white_bg";
	this.white_bg.parent = this;
	this.white_bg.setTransform(71.1,141.8,1.077,1.341,0,0,0,65,105);

	this.timeline.addTween(cjs.Tween.get(this.white_bg).wait(6));

	// stroke_shape
	this.stroke_shape = new lib.stroke_shape();
	this.stroke_shape.name = "stroke_shape";
	this.stroke_shape.parent = this;
	this.stroke_shape.setTransform(71.1,141.4,1.077,1.333,0,0,0,66,106);
	this.stroke_shape.alpha = 0.102;

	this.timeline.addTween(cjs.Tween.get(this.stroke_shape).wait(6));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,280,120);


// stage content:
(lib.product = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_0 = function() {
		if (this.initCode == true) return;
		this.initCode = true;
		var root = this;
		
		// put this line in when you want to use a google web font
		// put the name that google calls it here
		// TAKE THIS OUT when not using a custom font or else it will download it anyway
		this.customFont = [ { name: "Montserrat:400,700:latin", source: "google"} ];					
		this.maxTitleLength = 55;
		
		// always have a reset function when using dscs or autoblink
		this.reset = function () {
			// these are just examples, change it to do what you want
			root.reverse( root.dsc1);
			root.reverse( root.dsc2);
		    root.reverse( root.dsc3);
		};
		
		// when this block is here the armature will set up auto-blink
		this.autoBlink = {
			numObjects:4,
			order: [1,2,3,4]
		};
		
		// this has to be here when an auto-blink is set up
		this.blink = function ( dsc) {
			// change this to whatever you want to happen when it is time to blink
			root.reset();
			dsc.gotoAndPlay(0);
		};
		
		// when this block is here a dsc menu will be set up
		this.dscMenu = {
			// tell the menu where the buttons are
			// in this example the buttons are nested in the dsc's
			// if they were on the main timeline take out the 'dsc1.' part
			objects:["dsc1.button","dsc2.button","dsc3.button"]
		};
		
		// this must be here to define what happens when a dsc is rolled over
		this.dscOver = function ( evt) {	
			var dsc = root[ "dsc" + root.findParentIndex( evt.currentTarget)];
			root.reset();
			dsc.gotoAndPlay(0);
			root.pauseAnimation();
		};
		
		// this must be here to define what happens when a dsc is rolled out
		this.dscOut = function ( evt) {
			var dsc = root[ "dsc" + root.findParentIndex( evt.currentTarget)];
			root.reverse( dsc);
			root.resumeAnimation();
		};
		
		
		// run reset once at the beginning of the ad
		root.reset();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(16));

	// border
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#000000").ss(1,1,0,3).p("EgXWguyMAutAAAMAAABdlMgutAAAg");
	this.shape.setTransform(150,300);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(16));

	// logo stub
	this.logo = new lib.stub();
	this.logo.name = "logo";
	this.logo.parent = this;
	this.logo.setTransform(70,50,1,1,0,0,0,40,40);

	this.timeline.addTween(cjs.Tween.get(this.logo).wait(16));

	// previous
	this.previous = new lib.nav();
	this.previous.name = "previous";
	this.previous.parent = this;
	this.previous.setTransform(150,161,1,1,90,0,0,4,5);
	new cjs.ButtonHelper(this.previous, 0, 1, 2, false, new lib.nav(), 3);

	this.timeline.addTween(cjs.Tween.get(this.previous).wait(16));

	// next
	this.next = new lib.nav();
	this.next.name = "next";
	this.next.parent = this;
	this.next.setTransform(150,569,1,1,0,90,-90,4,5);
	new cjs.ButtonHelper(this.next, 0, 1, 2, false, new lib.nav(), 3);

	this.timeline.addTween(cjs.Tween.get(this.next).wait(16));

	// mask (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	mask.graphics.p("A13fQMAAAg+fMArvAAAMAAAA+fg");
	mask.setTransform(150,365);

	// dsc1
	this.dsc1 = new lib.dsc();
	this.dsc1.name = "dsc1";
	this.dsc1.parent = this;
	this.dsc1.setTransform(150,228.4,1,1,0,0,0,140,53.4);

	var maskedShapeInstanceList = [this.dsc1];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get(this.dsc1).wait(1).to({regY:60,y:213.8},0).wait(1).to({y:193.6},0).wait(1).to({y:174.3},0).wait(1).to({y:156},0).wait(1).to({y:138.7},0).wait(1).to({y:122.3},0).wait(1).to({y:106.9},0).wait(1).to({y:105},0).wait(8));

	// dsc2
	this.dsc2 = new lib.dsc();
	this.dsc2.name = "dsc2";
	this.dsc2.parent = this;
	this.dsc2.setTransform(150,358.4,1,1,0,0,0,140,53.4);

	var maskedShapeInstanceList = [this.dsc2];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get(this.dsc2).wait(1).to({regY:60,y:365},0).wait(1).to({y:352.5},0).wait(1).to({y:333.2},0).wait(1).to({y:314.9},0).wait(1).to({y:297.6},0).wait(1).to({y:281.2},0).wait(1).to({y:265.8},0).wait(1).to({y:251.4},0).wait(1).to({y:237.9},0).wait(1).to({y:235},0).wait(6));

	// dsc3
	this.dsc3 = new lib.dsc();
	this.dsc3.name = "dsc3";
	this.dsc3.parent = this;
	this.dsc3.setTransform(150,488.4,1,1,0,0,0,140,53.4);

	var maskedShapeInstanceList = [this.dsc3];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get(this.dsc3).wait(1).to({regY:60,y:495},0).wait(2).to({y:492.1},0).wait(1).to({y:473.8},0).wait(1).to({y:456.5},0).wait(1).to({y:440.1},0).wait(1).to({y:424.7},0).wait(1).to({y:410.3},0).wait(1).to({y:396.8},0).wait(1).to({y:384.3},0).wait(1).to({y:372.7},0).wait(1).to({y:365},0).wait(4));

	// dsc4
	this.dsc4 = new lib.dscblank();
	this.dsc4.name = "dsc4";
	this.dsc4.parent = this;
	this.dsc4.setTransform(150,618.4,1,1,0,0,0,140,53.4);

	var maskedShapeInstanceList = [this.dsc4];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get(this.dsc4).wait(1).to({regY:60,y:625},0).wait(4).to({y:615.4},0).wait(1).to({y:599},0).wait(1).to({y:583.6},0).wait(1).to({y:569.2},0).wait(1).to({y:555.7},0).wait(1).to({y:543.2},0).wait(1).to({y:531.6},0).wait(1).to({y:521},0).wait(1).to({y:511.4},0).wait(1).to({y:502.7},0).wait(1).to({y:495},0).wait(1));

	// bg
	this.instance = new lib.bg();
    this.instance.name = "bkgrd";
    this.instance.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(16));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(149.5,299.5,301,601.1);

})(lib = AdRollLiquidAds.flashLib, images = AdRollLiquidAds.flashImgs, createjs = AdRollLiquidAds.createJS);