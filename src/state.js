	var state = {
		state: null,
		store: function(s) {
			for (var k in s) {
				this[k] = s[k];
			}
			this.state = true;
			this.run();
		},
		builder: null,
		setBuilder: function(builder) {
			this.builder = builder;
			this.run();
		},
		run: function() {
			if (this.builder && this.state) {
				this.builder();
			}
		}
	};