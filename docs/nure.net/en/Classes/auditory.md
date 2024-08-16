# Auditory class

```csharp
public class Auditory
{
    public long Id { get; set; }
    public string Name { get; set; }
}
```

You can usually get this class when working with any information related to audiences. It contains information about the unique identifier of the audience, as well as its name. Since cist.nure.ua returns only identifiers during schedule requests, you will have to additionally request a list of audiences to get more information, if the name is enough for you, use the request for a list or the data from the Event class.

**Located in:** `Nure.Net.Types`
```