## Recursos necesarios

* python 2.7.6
* django 1.7.3
* mongodb 2.6.7
* pymongo 
* git

### Administradores de paquetes
* PIP 

`sudo apt-get install python-pip`

### git

Instalar

`apt-get install git`

Configurar SSH (Vinculando PC y Github)

[Generating SSH keys](https://help.github.com/articles/generating-ssh-keys/)

### Python 

Verificar version

`python --version`

### Django

Instalar

`pip install django==1.7.3`



Verificar versión

`django-admin version`

Django Extensions

`pip install django-extensions`

### Mongo

[Documentación oficial](http://docs.mongodb.org/v2.2/tutorial/install-mongodb-on-linux/)

Instalar en Ubuntu

`apt-get install mongodb-10gen=2.6.7`

NOTA: En caso de salir un error, agregar la llave de gestor de paquetes  
`sudo apt-key adv --keyserver hkp://keyserver.ubuntu.com:80 --recv 7F0CEB10`

Generar el fichero que tendra la URL de MongoDB 

`echo 'deb http://downloads-distro.mongodb.org/repo/ubuntu-upstart dist 10gen' | sudo tee /etc/apt/sources.list.d/mongodb.list`

Se actualiza la base de datos local de paquetes

`apt-get update`

Instalar con el siguiente comando: 
`apt-get install mongodb-org`

### pymongo

Django tiene conexión por defecto con bases de datos SQL, como SQLite. Pymongo es el conector entre django y mongodb.

Instalar en ubuntu 

`apt-get install python-pymongo`

### Verificar conexión
Esto es solo un test para verificar que todo se encuentra correctamente instalado

* Iniciar mongodb (dejar activo en terminal mientras se utiliza)

`sudo mongod`

* Crear script para verificar conexión `connect.py`

```python
import pymongo
connMongo = pymongo.Connection('mongodb://localhost:27017')
print connMongo.database_names()
connMongo.close()
```

* La ejecución del script da como respuesta las bases de datos disponibles y las generadas por defecto.

```
$ python connect.py 
[u'LJ', u'local', u'test']
```

* Ver en mongo las bases de datos disponibles, iniciando shell de mongo

`mongo`

* En la consola de mongo ver bases de datos

`show collection`


##Licencia

####GNU GENERAL PUBLIC LICENSE
#####Version 3, 29 June 2007

Copyright (C) 2007 Free Software Foundation, Inc. http://fsf.org/ Everyone is permitted to copy and distribute verbatim copies of this license document, but changing it is not allowed.

Creada por la Free Software Foundation como parte del proyecto GNU, es una de la más populares y utilizadas en la comunidad. Exige la publicación del código fuente y que todos los trabajos derivados del original conserven la misma licencia GPL, no permite enlaces con módulos privativos (de código cerrado) y requiere que todos los cambios realizados a la versión original sean reflejados en el código fuente con sus respectivos autores. Además posee ventajas únicas respecto a otras licencias como protección contra la tivoización y protección contra las leyes de DRM. Los derechos de autor deben conservarse tanto en el código fuente como en los binarios.