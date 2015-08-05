"use strict"

if (typeof MochaWeb !== 'undefined') {
  MochaWeb.testOnly(() => {
    describe("MTT - form helpers", () => {
      it('#fillIn', function() {
        var fullName = "Zach Ngo";

        MTT.fillIn('Full Name', fullName);

        chai.expect($("input[name='fullName']").val()).to.eql(fullName);
      });

      it.skip('#submit', () => {
        MTT.submit('#mtt-form').then(() => {
          var fullName = $("input[name='fullName']").val();

          chai.expect(fullName).to.eql('Zach Ngo');
          chai.expect(window.location.search).to.eql('?fullName=Zach%20Ngo');
        });
      });

      it.skip('#getValidity', () => {
        // TODO: Add autoform to demo app so we can test this
      });

      it('#check', () => {
        var checkBoxName = 'check-box-name';
        var checkBox = $("input[name='" + checkBoxName + "']");

        MTT.check(checkBoxName, true);

        chai.expect(checkBox.prop('checked')).to.eql(true);
      });
    });
  });
}
