         $(document).ready(function(){
                
			$('#myForm').bind('submit', function(){
                    
                    if($('#nome').val() == ""){
                        explodeMessage("Preencha o campo nome!");
                        $('#nome').focus();
                        return false;
                    }
                    
                    if($('#senha').val() == ""){
                       explodeMessage("Preencha o campo senha!");
                        $('#senha').focus();
                        return false;
                    }
                    
                });
				
			function explodeMessage(text){
				$('#messenger').html('<h3>' +text+'</h3>').slideDown('slow').delay(1500).slideUp('fast');
				}
                
            })