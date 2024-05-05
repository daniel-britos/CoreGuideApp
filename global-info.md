# Información 

## Import custom:
Se agrega en el archivo tsconfig.json especificando el directorio por ejemplo shared:

```json
  "compileOnSave": false,
  "compilerOptions": {
    "paths": {
      "@shared/*": ["./src/app/shared/*"],
    },
```
