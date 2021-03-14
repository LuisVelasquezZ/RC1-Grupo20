# Redes de Computadoras 1

## __Integrantes__
**201801237**	JOSÉ RAFAEL MORENTE GONZÁLEZ

**201801262**	JUAN JOSÉ RAMOS CAMPOS

**201807228**	GERSON ALEJANDRO BELTETÓN URBINA

**201807266**	LUIS FERNANDO VELÁSQUEZ ZACARÍAS


# Documentación 

## Configuración VPN Google Cloud
### 1. Debemos de crear una regla de firewall, colocamos el nombre open-vpn-port.

![Firewall 1 ](https://res.cloudinary.com/dtpqmjmhk/image/upload/v1615617660/Redes%20de%20Computadoras/Practica%201/1_rk0xfh.png)

### 2. Posterior debemos de permitir todos los protocolos y puertos para terminar de configurar el Firewall.

![Firewall 2](https://res.cloudinary.com/dtpqmjmhk/image/upload/v1615617659/Redes%20de%20Computadoras/Practica%201/2_gpqdd6.png)

### 3. Si no tenemos habilitado Compute Engine API lo habilitamos para poder crear la maquina virtual.

![Firewall 3](https://res.cloudinary.com/dtpqmjmhk/image/upload/v1615687726/Redes%20de%20Computadoras/Practica%201/3_hqutem.png)

### 4. Creamos una maquina virtual con el nombre vpn-ubuntu, con sistema de 4GB de RAM y 2 CPU virtuales.

![Firewall 4](https://res.cloudinary.com/dtpqmjmhk/image/upload/v1615687970/Redes%20de%20Computadoras/Practica%201/4_w3igew.png)

### 5. Seleccionamos la imagen de Ubuntu 18.04 LTS y un disco persistente equilibrado de 10GB.

![Firewall 5](https://res.cloudinary.com/dtpqmjmhk/image/upload/v1615688084/Redes%20de%20Computadoras/Practica%201/5_repsnk.png)

### 6. Debemos de permitir el trafico HTTP y HTTPS de nuestra maquina virtual.

![Firewall 6](https://res.cloudinary.com/dtpqmjmhk/image/upload/v1615688493/Redes%20de%20Computadoras/Practica%201/6_le4t9e.png)

### 7. Nos dirigimos a las herramientas de redes. En las etiquetas de red colocamos la referencia a la regla de firewall que configuramos en el paso 1.

![Firewall 7](https://res.cloudinary.com/dtpqmjmhk/image/upload/v1615688909/Redes%20de%20Computadoras/Practica%201/7_j1dyzx.png)

### 8. Una vez creada nuestra maquina virtual nos conectaremos mediante el protocolo SSH a nuestra maquina virtual.

![Firewall 8](https://res.cloudinary.com/dtpqmjmhk/image/upload/v1615689104/Redes%20de%20Computadoras/Practica%201/8_baiqh2.png)
![Firewall 9](https://res.cloudinary.com/dtpqmjmhk/image/upload/v1615690180/Redes%20de%20Computadoras/Practica%201/9_2_ms3xlv.png)

### 9. Procedemos a realizar una actualización de nuestro servidor con el siguiente comando.

```
$ sudo apt-get update
```

### 10. Una vez actualizado el comando anterior, procederemos a ejecutar el siguiente, para instalar las actualizaciones disponibles de todos los paquetes actualmente instalados

```
$ sudo apt-get upgrade
```

### 11. Posteriormente procederemos a instalar OPEN VPN en nuestra maquina virtual.

```
$ sudo wget https://cubaelectronica.com/OpenVPN/openvpn-install.sh​ && sudo bash openvpn-install.sh
```

### 12. Luego configuramos los parametros de OPEN VPN.
- [IP Privada] - Dejamos la que nos da por defecto
- [IP Publica] - Colocamos la ip publica que nos proporciona el servidor
- [Puerto] - El puerto donde queremos escuchar OPEN VPN dejamos el por defecto
- [DNS] - Seleccionamos el DNS de Google para usar con la VPN
- [Nombre VPN] - Finalmente configuramos el nombre para el certificado de cliente.

![Firewall 10](https://res.cloudinary.com/dtpqmjmhk/image/upload/v1615691796/Redes%20de%20Computadoras/Practica%201/10_bqz8wq.png)

### 13. Una vez finalizado el proceso descargamos el archivo, para ello presionamos el boton de configuracion

![Firewall 11](https://res.cloudinary.com/dtpqmjmhk/image/upload/v1615692518/Redes%20de%20Computadoras/Practica%201/11_na8vq8.png)

### 14. Escribimos la ruta donde se encuentra nuestro archivo y verificamos que no haya ningun espacio, presionamos descargar y obtenemos nuestro archivo para conectarnos a la primera red.

![Firewall 12](https://res.cloudinary.com/dtpqmjmhk/image/upload/v1615692522/Redes%20de%20Computadoras/Practica%201/12_x48raq.png)

### 14. Para generar mas clientes ingresamos los comandos.

```
sudo bash open-vpn.sh
```

```
sudo bash openvpn-install.sh
```

## Configuración Open VPN Connect

### 1. Descargar Open VPN Connect 

![OpenVPN 1](https://res.cloudinary.com/dtpqmjmhk/image/upload/v1615693825/Redes%20de%20Computadoras/Practica%201/13_drnypm.png)

### 2. Abrir archivo del cliente que se genero.

![OpenVPN 2](https://res.cloudinary.com/dtpqmjmhk/image/upload/v1615694049/Redes%20de%20Computadoras/Practica%201/14_jiuybl.png)

### 3. Confirmamos las opciones de nuestro archivo importado.

![OpenVPN 3](https://res.cloudinary.com/dtpqmjmhk/image/upload/v1615694049/Redes%20de%20Computadoras/Practica%201/15_egt4jf.png)

### 4. Revisamos que todo este conectado correctamente.

![OpenVPN 4](https://res.cloudinary.com/dtpqmjmhk/image/upload/v1615694048/Redes%20de%20Computadoras/Practica%201/16_noavde.png)

### 5. Luego procederemos a realizar un ping a la VPN que apuntamos desde nuestra maquina fisica.

![OpenVPN 5](https://res.cloudinary.com/dtpqmjmhk/image/upload/v1615694951/Redes%20de%20Computadoras/Practica%201/17_yrelsd.png)


## Configuración Cloud GNS3

### 1. En la maquina 1 configuramos el UDP Tunnel y colocamos la ip de la maquina a la cual nos queremos conectar, el puerto local a usar será el 30000 y el puerto remoto el 20000.

![Cloud GNS3 1](https://res.cloudinary.com/dtpqmjmhk/image/upload/v1615697089/Redes%20de%20Computadoras/Practica%201/T1-1_mvc1kv.png)

### 2. En la maquina 2 configuramos el UDP Tunnel y colocamos la ip de la maquina a la cual nos queremos conectar, el puerto local y remoto se configuran de manera contraria a la maquina 1.

![Cloud GNS3 2](https://res.cloudinary.com/dtpqmjmhk/image/upload/v1615697218/Redes%20de%20Computadoras/Practica%201/T2-1_rm9bul.jpg)

### 3. Ahora procedemos a levantar la topología 1 y esta debe de ser capaz de conectarse a los servidores de la topología 2 (Debe de realizar ping y mostrar la página web).

![Cloud GNS3 3](https://res.cloudinary.com/dtpqmjmhk/image/upload/v1615697673/Redes%20de%20Computadoras/Practica%201/TP_nlbmfq.png)


## Topología No. 1
### Se realizó una topología que incluye cuatro switch y seis pc distribuidas en tres VLAN, cada VLAN contiene dos pc (una vpc y una maquina virtual con sistema operativo Windows 7). Cada VLAN está aislada del resto y no tienen acceso una con otra, se configuraron puertos del switch como enlace troncal para el tráfico de todos los datos sin importar la VLAN y posteriormente se concectó a una nube configurada con la VPN.

**VLAN INFORMATICA:**
### VLAN 30
#### VPC: 192.168.120.30
#### VM: 192.168.120.15

**VLAN VENTAS:**
### VLAN 40
#### VPC: 192.168.220.30
#### VM: 192.168.220.15

**VLAN CONTABILIDAD:**
### VLAN 50
#### VPC: 192.168.20.15
#### VM: 192.168.20.30

![Topologia 1](https://res.cloudinary.com/dtpqmjmhk/image/upload/v1615699937/Redes%20de%20Computadoras/Practica%201/TP1_fdadua.png)

## Topología No. 2
### Se realizó una topología que incluye tres switch y tres servidores con sistema operativo linux, cada servidor pertenece a una VLAN distinta a los otros dos servidores, por lo cual están aislados. Se configuraron ciertos puertos de los switch como enlaces troncales para enviar el tráfico de las 3 VLAN. El switch que conecta los otros dos también se conectó a la nube configurada con los datos de la VPN.


**VLAN INFORMATICA:**
### VLAN 30
#### VM SERVER: 192.168.120.150

**VLAN VENTAS:**
### VLAN 40
#### VM SERVER: 192.168.220.150

**VLAN CONTABILIDAD:**
### VLAN 50
#### VM SERVER: 192.168.20.150

![Topologia 2](https://res.cloudinary.com/dtpqmjmhk/image/upload/v1615700241/Redes%20de%20Computadoras/Practica%201/TP2_vtwime.jpg)