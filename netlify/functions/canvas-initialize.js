 exports.handler = async (event, context) => {                                                                                        
    // Log EVERYTHING Intercom sends                                                                                                   
    console.log('=== CANVAS INITIALIZE CALLED ===')                                                                                    
    console.log('Method:', event.httpMethod)                                                                                           
    console.log('Headers:', JSON.stringify(event.headers, null, 2))                                                                    
    console.log('Body:', event.body)                                                                                                   
    console.log('================================')                                                                                    
                                                                                                                                       
    const headers = {                                                                                                                  
      'Content-Type': 'application/json',                                                                                              
      'Access-Control-Allow-Origin': '*',                                                                                              
      'Access-Control-Allow-Headers': 'Content-Type, Authorization',                                                                   
      'Access-Control-Allow-Methods': 'POST, OPTIONS'                                                                                  
    }                                                                                                                                  
                                                                                                                                       
    if (event.httpMethod === 'OPTIONS') {                                                                                              
      return { statusCode: 200, headers, body: '' }                                                                                    
    }                                                                                                                                  
                                                                                                                                       
    if (event.httpMethod !== 'POST') {                                                                                                 
      return { statusCode: 405, headers, body: JSON.stringify({ error: 'Method not allowed' }) }                                       
    }                                                                                                                                  
                                                                                                                                       
    try {                                                                                                                              
      // Minimal test - just 3 text components                                                                                         
      const response = {                                                                                                               
        canvas: {                                                                                                                      
          content: {                                                                                                                   
            components: [                                                                                                              
              {                                                                                                                        
                type: 'text',                                                                                                          
                text: 'Test Header',                                                                                                   
                style: 'header'                                                                                                        
              },                                                                                                                       
              {                                                                                                                        
                type: 'text',                                                                                                          
                text: 'Test paragraph text'                                                                                            
              },                                                                                                                       
              {                                                                                                                        
                type: 'text',                                                                                                          
                text: 'Order: NB-45678'                                                                                                
              }                                                                                                                        
            ]                                                                                                                          
          }                                                                                                                            
        }                                                                                                                              
      }                                                                                                                                
                                                                                                                                       
      console.log('Returning response:', JSON.stringify(response, null, 2))                                                            
                                                                                                                                       
      return {                                                                                                                         
        statusCode: 200,                                                                                                               
        headers,                                                                                                                       
        body: JSON.stringify(response)                                                                                                 
      }                                                                                                                                
    } catch (error) {                                                                                                                  
      console.error('ERROR:', error)                                                                                                   
      return {                                                                                                                         
        statusCode: 500,                                                                                                               
        headers,                                                                                                                       
        body: JSON.stringify({ error: error.message })                                                                                 
      }                                                                                                                                
    }                                                                                                                                  
  }                    
