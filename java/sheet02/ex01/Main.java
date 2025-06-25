class Persona {
    private String nombre;
    private int edad;

    public Persona(String n, int e) {
        this.nombre = n;
        this.edad = e;
    }

    public void mostrarDetalle() {
        System.out.println("Nombre: " + nombre + " Edad: " + edad);
    }

    public void setNombre (String n) {
        this.nombre = n;
    }

    public void setEdad (int e) {
        this.edad = e;
    }
     
    public String getNombre () {
        return this.nombre;
    }

    public int getEdad () {
        return this.edad;
    }
}

class Estudiante extends Persona implements Imprimible {
    private String grado;

    public Estudiante (String n, int e, String grado) {
        super(n, e);
        this.grado = grado;
    }

    public void SetGrado(String grado) {
        this.grado = grado;
    }

    public String getGrado () {
        return this.grado;
    }

    @Override
    public void mostrarDetalle() {
        System.out.println("Nombre: " + this.getNombre() + " Edad: " + this.getEdad() + " Grado: " + this.getGrado());
    }

    @Override
    public void imprimir() {
        System.out.println("Imprimiendo detalles del estudiante/empleado:");
        System.out.println("Nombre: " + this.getNombre() + " Edad: " + this.getEdad() + " Grado: " + this.getGrado());
    }
}

class Empleado extends Persona implements Imprimible {

    private double salario;

    public Empleado (String n, int e, double salario) {
        super(n, e);
        this.salario = salario;
    }

    public void setSalario(double salario) {
        this.salario = salario;
    }

    public double getSalario () {
        return this.salario;
    }

    @Override
     public void mostrarDetalle() {
        System.out.println("Nombre: " + this.getNombre() + " Edad: " + this.getEdad() + " Grado: " + this.getSalario());
    }

    @Override
    public void imprimir() {
        System.out.println("Imprimiendo detalles del estudiante/empleado:");
        System.out.println("Nombre: " + this.getNombre() + " Edad: " + this.getEdad() + " Grado: " + this.getSalario());
    }
}

public class Main {
    public static void main(String[] args) {
        Persona miPersona = new Persona("Paco", 24);
        Persona miPersona2 = new Persona("Lucía", 15);
        Estudiante miEstudiante = new Estudiante("Ana", 20, "Ingeniería");

        miPersona.setNombre("Marcos");
        miPersona.setEdad(17);

        System.out.println(miPersona.getNombre());

        miPersona.mostrarDetalle();
        miPersona2.mostrarDetalle();
        miEstudiante.mostrarDetalle();
        
        Persona[] personas = {
            new Estudiante("Ana", 20, "Ingeniería"),
            new Empleado("Luis", 30, 50000),
            new Persona("Marta", 40)
        };

        for(Persona persona : personas) {
            persona.mostrarDetalle();
        }

        Imprimible[] imprimibles = {
            new Estudiante("Ana", 20, "Ingeniería"),
            new Empleado("Luis", 30, 50000)
        };

        for (Imprimible i : imprimibles) {
            i.imprimir();
        }
    }
}