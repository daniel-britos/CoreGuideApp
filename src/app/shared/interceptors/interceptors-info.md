# Interceptors
## ¿que son los interceptors?
Los interceptores en Angular son clases que actúan como intermediarios entre su aplicación y las solicitudes y respuestas HTTP que realiza.  En otras palabras, interceptan las comunicaciones HTTP que van desde tu aplicación hacia el servidor y las que vuelven del servidor a tu aplicación, permitiendo manipularlas o modificarlas antes de que lleguen a su destino.

### Algunas de las funcionalidades clave de los interceptores:

Transformar Solicitudes y Respuestas: Puedes modificar las solicitudes HTTP antes de enviarlas al servidor. Esto incluye agregar cabeceras de autorización, tokens de autenticación o cualquier otra información necesaria. También puedes modificar las respuestas HTTP recibidas del servidor, por ejemplo, para procesar errores de manera centralizada o extraer información específica.
Agregar Comportamiento Común: Los interceptores te permiten implementar lógica común que se aplicará a todas o a un grupo específico de solicitudes HTTP. Ejemplos de esta lógica común incluyen:
Mostrar un indicador de carga mientras se realizan peticiones HTTP.
Manejar errores de red de forma centralizada.
Agregar cabeceras de autorización a todas las solicitudes.
Centralizar la Gestión de Tokens: Puedes utilizar interceptores para agregar tokens de autenticación a las solicitudes de forma centralizada, mejorando la seguridad y evitando la necesidad de repetir este código en cada servicio que realiza peticiones HTTP.
Monitorear y Registrar Peticiones: Los interceptores te permiten registrar información sobre las peticiones HTTP realizadas por tu aplicación, incluyendo la URL, el método, los datos enviados y las respuestas recibidas. Esto puede ser útil para debugging, análisis de rendimiento y auditorías de seguridad.
En resumen, los interceptores son una herramienta poderosa para:

Mejorar la reusabilidad: Implementas lógica común una sola vez en el interceptor y se aplica a todas las solicitudes que lo requieran.
Simplificar el código: Evitas código repetitivo para agregar cabeceras, manejar errores o mostrar indicadores de carga en cada servicio.
Aumentar la mantenibilidad: Centralizas la lógica relacionada con las comunicaciones HTTP, facilitando su modificación y actualización.
Mejorar la seguridad: Puedes gestionar tokens de autenticación de forma centralizada y segura.
Si realizas diversas peticiones HTTP en tu aplicación Angular, los interceptores te ayudarán a optimizar tu código, centralizar la lógica y mejorar la experiencia general de desarrollo.
