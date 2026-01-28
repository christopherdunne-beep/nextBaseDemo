exports.handler = async (event, context) => {                                                                                        
    if (event.httpMethod !== 'POST') {                                                                                                 
      return {                                                                                                                         
        statusCode: 405,                                                                                                               
        body: JSON.stringify({ error: 'Method not allowed' })                                                                          
      }                                                                                                                                
    }                                                                                                                                  
                                                                                                                                       
    try {                                                                                                                              
      const body = JSON.parse(event.body)                                                                                              
      const componentId = body.component_id                                                                                            
                                                                                                                                       
      console.log('Canvas submit:', componentId)                                                                                       
                                                                                                                                       
      return {                                                                                                                         
        statusCode: 200,                                                                                                               
        headers: {                                                                                                                     
          'Content-Type': 'application/json'                                                                                           
        },                                                                                                                             
        body: JSON.stringify({                                                                                                         
          canvas: {                                                                                                                    
            content: {                                                                                                                 
              components: [                                                                                                            
                {                                                                                                                      
                  type: 'text',                                                                                                        
                  text: '✅ Action completed',                                                                                         
                  style: 'header'                                                                                                      
                },                                                                                                                     
                {                                                                                                                      
                  type: 'text',                                                                                                        
                  text: `Button "${componentId}" was clicked`                                                                          
                }                                                                                                                      
              ]                                                                                                                        
            }                                                                                                                          
          }                                                                                                                            
        })                                                                                                                             
      }                                                                                                                                
    } catch (error) {                                                                                                                  
      console.error('Canvas submit error:', error)                                                                                     
      return {                                                                                                                         
        statusCode: 200,                                                                                                               
        headers: {                                                                                                                     
          'Content-Type': 'application/json'                                                                                           
        },                                                                                                                             
        body: JSON.stringify({                                                                                                         
          canvas: {                                                                                                                    
            content: {                                                                                                                 
              components: [                                                                                                            
                {                                                                                                                      
                  type: 'text',                                                                                                        
                  text: '⚠️ Error',                                                                                                    
                  style: 'error'                                                                                                       
                }                                                                                                                      
              ]                                                                                                                        
            }                                                                                                                          
          }                                                                                                                            
        })                                                                                                                             
      }                                                                                                                                
    }                                                                                                                                  
  }                 
