exports.handler = async (event, context) => {                                                                                        
    // Only accept POST requests                                                                                                       
    if (event.httpMethod !== 'POST') {                                                                                                 
      return {                                                                                                                         
        statusCode: 405,                                                                                                               
        body: JSON.stringify({ error: 'Method not allowed' })                                                                          
      }                                                                                                                                
    }                                                                                                                                  
                                                                                                                                       
    try {                                                                                                                              
      console.log('Nextbase Canvas Initialize')                                                                                        
                                                                                                                                       
      const components = [                                                                                                             
        {                                                                                                                              
          type: 'text',                                                                                                                
          text: '📦 Order Management',                                                                                                 
          style: 'header'                                                                                                              
        },                                                                                                                             
        {                                                                                                                              
          type: 'divider'                                                                                                              
        },                                                                                                                             
        {                                                                                                                              
          type: 'text',                                                                                                                
          text: 'Customer',                                                                                                            
          style: 'header'                                                                                                              
        },                                                                                                                             
        {                                                                                                                              
          type: 'text',                                                                                                                
          text: 'Lauren Mitchell'                                                                                                      
        },                                                                                                                             
        {                                                                                                                              
          type: 'text',                                                                                                                
          text: 'laurenmitchell@example.com'                                                                                           
        },                                                                                                                             
        {                                                                                                                              
          type: 'text',                                                                                                                
          text: 'Customer since Jan 2024 • 3 orders'                                                                                   
        },                                                                                                                             
        {                                                                                                                              
          type: 'divider'                                                                                                              
        },                                                                                                                             
        {                                                                                                                              
          type: 'text',                                                                                                                
          text: 'Order Details',                                                                                                       
          style: 'header'                                                                                                              
        },                                                                                                                             
        {                                                                                                                              
          type: 'text',                                                                                                                
          text: '📹 Nextbase 622GW Dash Cam',                                                                                          
          style: 'header'                                                                                                              
        },                                                                                                                             
        {                                                                                                                              
          type: 'text',                                                                                                                
          text: 'SKU: 622GW-UK • Quantity: 1'                                                                                          
        },                                                                                                                             
        {                                                                                                                              
          type: 'text',                                                                                                                
          text: '£274.99',                                                                                                             
          style: 'header'                                                                                                              
        },                                                                                                                             
        {                                                                                                                              
          type: 'spacer',                                                                                                              
          size: 's'                                                                                                                    
        },                                                                                                                             
        {                                                                                                                              
          type: 'text',                                                                                                                
          text: 'Order Number: NB-45678'                                                                                               
        },                                                                                                                             
        {                                                                                                                              
          type: 'text',                                                                                                                
          text: 'Order Status: Shipped'                                                                                                
        },                                                                                                                             
        {                                                                                                                              
          type: 'text',                                                                                                                
          text: 'Order Date: 15 January 2026'                                                                                          
        },                                                                                                                             
        {                                                                                                                              
          type: 'text',                                                                                                                
          text: 'Warranty Status: Active until 15 Jan 2027'                                                                            
        },                                                                                                                             
        {                                                                                                                              
          type: 'divider'                                                                                                              
        },                                                                                                                             
        {                                                                                                                              
          type: 'text',                                                                                                                
          text: 'Shipping & Tracking',                                                                                                 
          style: 'header'                                                                                                              
        },                                                                                                                             
        {                                                                                                                              
          type: 'text',                                                                                                                
          text: 'Carrier: Royal Mail'                                                                                                  
        },                                                                                                                             
        {                                                                                                                              
          type: 'text',                                                                                                                
          text: 'Tracking Number: RM123456789GB'                                                                                       
        },                                                                                                                             
        {                                                                                                                              
          type: 'text',                                                                                                                
          text: 'Shipping Address: Cardiff, CF10 1AA, UK'                                                                              
        },                                                                                                                             
        {                                                                                                                              
          type: 'text',                                                                                                                
          text: 'Expected Delivery: Today by 17:00',                                                                                   
          style: 'header'                                                                                                              
        },                                                                                                                             
        {                                                                                                                              
          type: 'spacer',                                                                                                              
          size: 's'                                                                                                                    
        },                                                                                                                             
        {                                                                                                                              
          type: 'text',                                                                                                                
          text: '✅ Out for delivery',                                                                                                 
          style: 'header'                                                                                                              
        },                                                                                                                             
        {                                                                                                                              
          type: 'text',                                                                                                                
          text: 'Local Delivery Office, Cardiff'                                                                                       
        },                                                                                                                             
        {                                                                                                                              
          type: 'text',                                                                                                                
          text: '27 Jan 2026, 09:00'                                                                                                   
        },                                                                                                                             
        {                                                                                                                              
          type: 'spacer',                                                                                                              
          size: 's'                                                                                                                    
        },                                                                                                                             
        {                                                                                                                              
          type: 'text',                                                                                                                
          text: 'In transit'                                                                                                           
        },                                                                                                                             
        {                                                                                                                              
          type: 'text',                                                                                                                
          text: 'Regional Sorting Centre • 26 Jan 2026, 14:30'                                                                         
        },                                                                                                                             
        {                                                                                                                              
          type: 'spacer',                                                                                                              
          size: 's'                                                                                                                    
        },                                                                                                                             
        {                                                                                                                              
          type: 'text',                                                                                                                
          text: 'Shipped'                                                                                                              
        },                                                                                                                             
        {                                                                                                                              
          type: 'text',                                                                                                                
          text: 'Nextbase Warehouse • 25 Jan 2026, 10:15'                                                                              
        },                                                                                                                             
        {                                                                                                                              
          type: 'divider'                                                                                                              
        },                                                                                                                             
        {                                                                                                                              
          type: 'text',                                                                                                                
          text: '⚡ Escalated from Fin AI',                                                                                            
          style: 'header'                                                                                                              
        },                                                                                                                             
        {                                                                                                                              
          type: 'text',                                                                                                                
          text: 'Customer asked: "Where is my order NB-45678?"'                                                                        
        },                                                                                                                             
        {                                                                                                                              
          type: 'divider'                                                                                                              
        },                                                                                                                             
        {                                                                                                                              
          type: 'text',                                                                                                                
          text: 'Quick Actions',                                                                                                       
          style: 'header'                                                                                                              
        },                                                                                                                             
        {                                                                                                                              
          type: 'button',                                                                                                              
          id: 'process_return',                                                                                                        
          label: '📦 Process Return',                                                                                                  
          style: 'primary',                                                                                                            
          action: {                                                                                                                    
            type: 'submit'                                                                                                             
          }                                                                                                                            
        },                                                                                                                             
        {                                                                                                                              
          type: 'button',                                                                                                              
          id: 'issue_refund',                                                                                                          
          label: '💰 Issue Refund',                                                                                                    
          style: 'primary',                                                                                                            
          action: {                                                                                                                    
            type: 'submit'                                                                                                             
          }                                                                                                                            
        }                                                                                                                              
      ]                                                                                                                                
                                                                                                                                       
      return {                                                                                                                         
        statusCode: 200,                                                                                                               
        headers: {                                                                                                                     
          'Content-Type': 'application/json'                                                                                           
        },                                                                                                                             
        body: JSON.stringify({                                                                                                         
          canvas: {                                                                                                                    
            content: {                                                                                                                 
              components: components                                                                                                   
            }                                                                                                                          
          }                                                                                                                            
        })                                                                                                                             
      }                                                                                                                                
    } catch (error) {                                                                                                                  
      console.error('Canvas initialize error:', error)                                                                                 
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
                  text: '⚠️ Error loading order data',                                                                                 
                  style: 'error'                                                                                                       
                }                                                                                                                      
              ]                                                                                                                        
            }                                                                                                                          
          }                                                                                                                            
        })                                                                                                                             
      }                                                                                                                                
    }                                                                                                                                  
  }              
