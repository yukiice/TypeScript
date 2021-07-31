"use strict";

var maps = [{
  item: [1, 2, 3, 4, 5]
}, {
  item: [11, 12, 13, 15]
}];

function mapss(data) {
  var status, first;
  return regeneratorRuntime.async(function mapss$(_context2) {
    while (1) {
      switch (_context2.prev = _context2.next) {
        case 0:
          status = true;
          first = true;
          _context2.next = 4;
          return regeneratorRuntime.awrap(Promise.all(data.map(function _callee(item, index) {
            var q, b;
            return regeneratorRuntime.async(function _callee$(_context) {
              while (1) {
                switch (_context.prev = _context.next) {
                  case 0:
                    b = function _ref2() {
                      status = false;
                      console.log('b', index);
                      setTimeout(function () {
                        status = true;
                        console.log('right b');
                      }, 300);
                    };

                    q = function _ref() {
                      if (first) {
                        status = false;
                        console.log('q', index);
                        first = false;
                        setTimeout(function () {
                          status = true;
                          first = false;
                          console.log('right q');
                        }, 3000);
                      }
                    };

                    if (!status) {
                      _context.next = 5;
                      break;
                    }

                    _context.next = 5;
                    return regeneratorRuntime.awrap(q());

                  case 5:
                    if (!status) {
                      _context.next = 8;
                      break;
                    }

                    _context.next = 8;
                    return regeneratorRuntime.awrap(b());

                  case 8:
                    console.log('c', index);

                  case 9:
                  case "end":
                    return _context.stop();
                }
              }
            });
          })));

        case 4:
        case "end":
          return _context2.stop();
      }
    }
  });
}

mapss(maps);