# Redes de Computadoras 1

## __Integrantes__
**201801237**	JOSÉ RAFAEL MORENTE GONZÁLEZ

**201801262**	JUAN JOSÉ RAMOS CAMPOS

**201807228**	GERSON ALEJANDRO BELTETÓN URBINA

**201807266**	LUIS FERNANDO VELÁSQUEZ ZACARÍAS


## __Comandos Utilizados__

**Configuracion de chanel ports en Ethernet Switch**

1. (config) interface range fa1/x - y, donde X e Y son el rango de puertos a utilizar, por ejemplo fa1/3 - 5
2. (config) channel group X mode on, donde X es el numero de canal 1,2,3, etc

**Configuracion de enlaces troncales Ethernet Switch**

1. (config) interface poX donde X es el numero de channel port que se quiere configurar
2. (config) switchport mode trunk
3. (config) switchport trunk allowed vlan 1-2, a,b,c ... x,y,z, 1002-1005 donde a, b, c, etc son los numeros de vlan a los que van a tener acceso los enlaces troncales

**Configuracion de VTP en Ethernet Switch**
1. (config) vtp domain nombre_dominio
2. (config) vtp password password_dominio
3. (config) vtp mode client/server, seleccionar si el switch funcionara como servidor o cliente
4. (config) spanning-tree vlan # root primary para indicar que el switch que va a funcionar como servidor va a ser la ruta primaria
