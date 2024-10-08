# Setting up

:::info
Used by our [API](https://github.com/mindenit/api)
:::

.NET library for work with cist.nure.ua. That library allows you to get information about schedule, teachers, groups, and other information from the site cist.nure.ua.

> [!NOTE]
> This library is not official and is not supported by the site cist.nure.ua.
> **But**, it is supported by students and Mindenit Team :)

Below you will find a short guide to using this library.

---

### Links

[NuGet Page with same guide.](https://www.nuget.org/packages/Nure.NET/)

---

### Installation

You can install this library via Nuget Package Manager, or via .NET CLI:

```bash
dotnet add package Nure.NET
```

### Usage

Get teachers list:

```csharp
using Nure.NET;
using Nure.NET.Types;

class Program
{
    static void Main()
    {
        var teachers = Cist.GetTeachers();

        foreach (var teacher in teachers)
        {
            Console.WriteLine(teacher.FullName);
        }
    }
}
```

Get groups list:

```csharp
using Nure.NET;
using Nure.NET.Types;

class Program
{
    static void Main()
    {
        var groups = Cist.GetGroups();

        foreach (var group in groups)
        {
            Console.WriteLine(group.Name);
        }
    }
}
```

Get auditories list:

```csharp
using Nure.NET;
using Nure.NET.Types;

class Program
{
    static void Main()
    {
        var auditories = Cist.GetAuditories();

        foreach (var auditory in auditories)
        {
            Console.WriteLine(auditory.Name);
        }
    }
}
```

Get schedule for group or other entity:

```csharp
using Nure.NET;
using Nure.NET.Types;

class Program
{
    static void Main()
    {
        /* Get schedule for group "КІУКІ-22-7", for other entities use EntityType enum
            * EventType.Group - for groups
            * EventType.Teacher - for teachers
            * EventType.Auditory - for auditories
           Default, if you don't specify startTime and endTime, method will return
           all avilable lessons for that group.
        */
        var schedule = Cist.GetEvents(10304333, EventType.Group);

        foreach (var lesson in schedule)
        {
            Console.WriteLine(lesson);
        }
    }
}
```

Get schedule for group with specified time:

```csharp
using Nure.NET;
using Nure.NET.Types;

class Program
{
    static void Main()
    {
        var events = Cist.GetEvents(EventType.Group, 10304333, 1693170000, 1694811599);

        foreach (var item in events)
        {
            Console.WriteLine(item.Subject.Title);
        }
    }
}
```
