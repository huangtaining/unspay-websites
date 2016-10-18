var $ = require('jquery');

$(document).ready(function() {
	
	require('modules/app/jquery.bootstrapValidator');

				// Generate a simple captcha
				function randomNumber(min, max) {
					return Math.floor(Math.random() * (max - min + 1) + min);
				};

				$('#captchaOperation').html([randomNumber(1, 100), '+', randomNumber(1, 200), '='].join(' '));

				$("#btnSubmit").bind("click", function() {
					alert("Submit");
				});

				$('#defaultForm').bootstrapValidator({
					//live: 'disabled',
					message: 'This value is not valid',
					feedbackIcons: {
						valid: 'glyphicon glyphicon-ok',
						invalid: 'glyphicon', //glyphion-remove
						validating: 'glyphicon glyphicon-refresh'
					},
					fields: {
						ddlQuestion: {
							validators: {
								notEmpty: {
									message: '不能为空'
								}
							}
						}

					}
				});

				// Validate the form manually
				$('#validateBtn').click(function() {
					$('#defaultForm').bootstrapValidator('validate');
				});

				$('#resetBtn').click(function() {
					$('#defaultForm').data('bootstrapValidator').resetForm(true);
				});
});