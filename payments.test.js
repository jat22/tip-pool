describe("Payment tests(with setup and tear-down)", function() {
	beforeEach(function () {
	  // initialization logic
	  billAmtInput.value = '120'
	  tipAmtInput.value = '30'

	});
  
	it('should return undefined if empty input provided', function () {
		billAmtInput.value = ''
	  	tipAmtInput.value = ''
		
		const results = createCurPayment()
		expect(results).toEqual(undefined);
	});
  
	it('should return an object with input values', function(){
		const results = createCurPayment();
		expect(Object.keys(results).length).toEqual(3)
		expect(results.billAmt).toEqual('120');

	})
	it('should payment update #paymentTable on appendPaymentTable()', function () {
		let curPayment = createCurPayment();
		allPayments['payment1'] = curPayment;			//when this runs, the id is 'payment0'??
		
		let results = appendPaymentTable(curPayment);
		
		expect(Object.keys(results).length).equalTo(3)

	  });

	  it('should ')

	afterEach(function() {
		billAmtInput.value = ''
	  	tipAmtInput.value = ''
		// document.querySelector('#paymentTable tbody tr').remove();
	});
  });
  