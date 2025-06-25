/* Formato 1: 16/07/2024
Formato 2: 2024-07-16 09:09:04
Formato 3: mar, jul 16 2024 */
import java.time.*;
import java.util.*;
import java.text.*;

public class DateExample {
    public static void main(String[] args) {
        Date now = new Date();

        SimpleDateFormat format1 = new SimpleDateFormat("dd/MM/YYYY");
        SimpleDateFormat format2 = new SimpleDateFormat("YYYY-MM-dd HH:mm:ss");
        SimpleDateFormat format3 = new SimpleDateFormat("E, MMM dd YYYY");

        String fechaFormateada1 = format1.format(now);
        String fechaFormateada2 = format2.format(now);
        String fechaFormateada3 = format3.format(now);

        System.out.println(fechaFormateada1);
        System.out.println(fechaFormateada2);
        System.out.println(fechaFormateada3);

        ArrayList<Integer> miLista = new ArrayList<>();

        miLista.add(10);
        miLista.add(25);
        miLista.add(30);

        int aux = 0;

        for(int numero : miLista) {
            aux += numero;
        }

        System.out.println("Total: " + aux);
        
        LinkedList<String> miLista2 = new LinkedList<>();

        miLista2.addLast("Hola");
        miLista2.addLast("mi");
        miLista2.addLast("mundo");

        for(String pal : miLista2) {
            System.out.println(pal);
        }

        HashMap<String, Integer> miMapa = new HashMap<>();

        miMapa.put("Ana", 25);
        miMapa.put("Luis", 35);
        miMapa.put("Juan", 30);

        miMapa.forEach((clave, valor) -> {
            System.out.println(clave + " tiene " + valor + " años.");
        });

        HashSet<Integer> miSet = new HashSet<>();

        miSet.add(10);
        miSet.add(20);
        miSet.add(20);
        miSet.add(30);
        miSet.add(30);
        miSet.add(10);

        System.out.println(miSet);
    }
}