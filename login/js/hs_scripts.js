(function($){
	$.addrelatorio = function(t,p){
		  p = $.extend({
		 // autoprint:false, //id do formulario
		 
		  url: false, //url do relatorio
		  name: 'V&iacute;deo tutorial', //url do relatorio
		  width: 764,
		 height: 460
		}, p);
		if($(t).is(':hidden')){
			$(t).show();
		}
		//fundo modal----------------------------------------------------------------------
		$('body').append('<div id="relatorio_modal" class="modal" style="z-index:9998;"></div>');
		//ajusta modal----------------------------------------------------------------------
		//var larg_doc = $(window).width();
		//var alt_doc = (parseFloat($(window).height()))-(parseFloat($(t).offset().top)+10);
		//$(t).css({'left':((larg_doc-790)/2).toString()+'px','height':alt_doc.toString()+'px'});
		//$(t).css({'top':10,'left':($(window).width()-980)/2,'width':'980','height':$(window).height()-25});
		var top = ($(window).height()-(p.height+30))/2;
		if(top<0){ top = 0; }
		if(p.height>($(window).height()-30)){
			p.height = $(window).height()-30;
		}
		if(p.width > ($(window).width()-16)){
			p.width = ($(window).width()-16);
		}
		$(t).css({'top':top,'left':($(window).width()-(p.width+16))/2,'width':(p.width+16)});
		//funções do formulario------------------------------------------------------------------
		var g = {
			fecha:function(){
				$('#relatorio_modal').remove();
				$(t).empty().hide();
			}
		};
		//display----------------------------------------------------------------------
		var display = document.createElement("div");
		display.className = 'mDiv';
		display.style.height = '24px';
		display.style.border = '0px';
		display.innerHTML = '<div class="ftitle">'+p.name+'</div>';

		var div_botoes = document.createElement("div");
		div_botoes.className = 'btn_row';
		
		var div_fechar = document.createElement("div");
		div_fechar.className = 'btn2 close2';
		div_fechar.title = 'Fechar';
		$(div_fechar).html('x').click(function(){
			g.fecha('F');
		});
		$(div_botoes).append(div_fechar);
		$(display).append(div_botoes);
		$(t).empty().append(display);
		
		
		
		
		var iframe = document.createElement('iframe');
		iframe.style.width = p.width+'px';
		iframe.style.height = p.height+'px';
		iframe.style.margin = '7px';
		iframe.style.marginBottom = '5px';
		iframe.style.marginTop = '0px';
		iframe.style.boxShadow = '0 0 0px 1px rgba(255, 255, 255, 0.65)';
		iframe.style.border = '1px solid #666';
		iframe.style.background = '#fff';
		iframe.src = p.url;
		$(t).append(iframe);
		//$('iframe').load(function(e) {
			//$(this).contents().find('body').css({'background':'none transparent'});
		//});
	};
	$.fn.IXCrelatorio= function(p){return this.each(function(){$.addrelatorio(this,p);});};
	//$.fn.formNovo = function(){return this.each(function(){this.pllugformfuncoes.novo()})};
})(jQuery);
(function() {
    var $,
        __indexOf = [].indexOf || function(item) {
            for (var i = 0, l = this.length; i < l; i++) {
                if (i in this && this[i] === item) return i;
            }
            return -1;
        };

    $ = jQuery;
    $.fn.validateCreditCard = function(callback, options) {
        var card, card_type, card_types, get_card_type, is_valid_length, is_valid_luhn, normalize, validate, validate_number, _i, _len, _ref, _ref1;
        card_types = [{
            name: 'amex',
            pattern: /^3[47]/,
            valid_length: 15,
            ccv: 4
        }, {
            name: 'diners',
            pattern: /^30[0-5]|^3[68]/,
            valid_length: 14,
            ccv: 3
        }, {
            name: 'jcb',
            pattern: /^35(2[89]|[3-8][0-9])/,
            valid_length: 16,
            ccv: 3
        }, {
            name: 'mastercard',
            pattern: /^5[1-5]/,
            valid_length: 16,
            ccv: 3
        }, {
            name: 'discover',
            pattern: /^(6011|622(12[6-9]|1[3-9][0-9]|[2-8][0-9]{2}|9[0-1][0-9]|92[0-5]|64[4-9])|65)/,
            valid_length: 16,
            ccv: 3
        },{//604201 && ccDigits.At(6) <= 604219:
            name: 'cabal',
            pattern: /^(60420[1-9]{1}|60421[0-9]{1})/,
            valid_length: 16,
            ccv: 3
        }, {
            name: 'elo',
            pattern: /^(636368|438935|504175|451416|636297|5067|4576|4011|509048|509067|509049|509069|509050|509074|509068|509040|509045|509051|509046|509066|509047|509042|509052|509043|509064|509040|36297|5067|4576|4011)/,
            valid_length: 16,
            ccv: 3
        }, {
            name: 'visa',
            pattern: /^4/,
            valid_length: 16,
            ccv: 3
        }, {
            name: 'aura',
            pattern: /^50/,
            valid_length: 19,
            ccv: 3
        }];
        bind = false;
        if (callback) {
            if (typeof callback === 'object') {
                options = callback;
                bind = false;
                callback = null;
            } else if (typeof callback === 'function') {
                bind = true;
            }
        }
        if (options == null) {
            options = {};
        }
        if (options.accept == null) {
            options.accept = (function() {
                var _i, _len, _results;
                _results = [];
                for (_i = 0, _len = card_types.length; _i < _len; _i++) {
                    card = card_types[_i];
                    _results.push(card.name);
                }
                return _results;
            })();
        }
        _ref = options.accept;
        for (_i = 0, _len = _ref.length; _i < _len; _i++) {
            card_type = _ref[_i];
            if (__indexOf.call((function() {
                    var _j, _len1, _results;
                    _results = [];
                    for (_j = 0, _len1 = card_types.length; _j < _len1; _j++) {
                        card = card_types[_j];
                        _results.push(card.name);
                    }
                    return _results;
                })(), card_type) < 0) {
                throw "Credit card type '" + card_type + "' is not supported";
            }
        }
        get_card_type = function(number) {
            var _j, _len1, _ref1;
            _ref1 = (function() {
                var _k, _len1, _ref1, _results;
                _results = [];
                for (_k = 0, _len1 = card_types.length; _k < _len1; _k++) {
                    card = card_types[_k];
                    if (_ref1 = card.name, __indexOf.call(options.accept, _ref1) >= 0) {
                        _results.push(card);
                    }
                }
                return _results;
            })();
            for (_j = 0, _len1 = _ref1.length; _j < _len1; _j++) {
                card_type = _ref1[_j];
                if (number.match(card_type.pattern)) {
                    return card_type;
                }
            }
            return null;
        };
        is_valid_luhn = function(number) {
            var digit, n, sum, _j, _len1, _ref1;
            sum = 0;
            _ref1 = number.split('').reverse();
            for (n = _j = 0, _len1 = _ref1.length; _j < _len1; n = ++_j) {
                digit = _ref1[n];
                digit = +digit;
                if (n % 2) {
                    digit *= 2;
                    if (digit < 10) {
                        sum += digit;
                    } else {
                        sum += digit - 9;
                    }
                } else {
                    sum += digit;
                }
            }
            return sum % 10 === 0;
        };
        is_valid_length = function(number, card_type) {
            //var _ref1;
            //console.log(number.length);
            //console.log(card_type.valid_length);
            return number.length == card_type.valid_length;
            //return _ref1 = number.length, __indexOf.call(card_type.valid_length, _ref1) >= 0;
        };
        validate_number = (function(_this) {
            return function(number) {
                var length_valid, luhn_valid;
                card_type = get_card_type(number);
                luhn_valid = false;
                length_valid = false;
                if (card_type != null) {
                    luhn_valid = is_valid_luhn(number);
                    length_valid = is_valid_length(number, card_type);
                }
                return {
                    card_type: card_type,
                    valid: luhn_valid && length_valid,
                    luhn_valid: luhn_valid,
                    length_valid: length_valid
                };
            };
        })(this);
        validate = (function(_this) {
            return function() {
                var number;
                number = normalize($(_this).val());
                return validate_number(number);
            };
        })(this);
        normalize = function(number) {
            return number.replace(/[ -]/g, '');
        };
        if (!bind) {
            return validate();
        }
        this.on('input.jccv', (function(_this) {
            return function() {
                $(_this).off('keyup.jccv');
                return callback.call(_this, validate());
            };
        })(this));
        this.on('keyup.jccv', (function(_this) {
            return function() {
                return callback.call(_this, validate());
            };
        })(this));
        callback.call(this, validate());
        return this;
    };

}).call(this);
jQuery.fn.extend({
	maskFone: function(){
		var maskBehavior = function (val) {
			if(/^(\(?[0][8,3]\)?)/g.test(val)){
		  	return '0000 000 0000';
		  }
			else if(val.replace(/\D/g, '').length === 11){
		  	return '(00) 00000-0000';
		  }
		  else{
		  	return '(00) 0000-00009';
		  }
		},
		options = {onKeyPress: function(val, e, field, options) {
		        field.mask(maskBehavior.apply({}, arguments), options);
		    }
		};
		
		$(this).mask(maskBehavior, options);
	}
});
$(document).ready(function () {
    $('.dropdown-submenu').on("click", function(e){
        $(this).find('ul').toggle();
        e.stopPropagation();
        //e.preventDefault();
    });
});