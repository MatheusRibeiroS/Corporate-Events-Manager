package event_management_service.controllers;

import event_management_service.Enums.EventStatusEnum;
import event_management_service.entities.EventEntity;
import event_management_service.services.EventService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;
import java.util.Optional;

@RestController
@RequestMapping(path = "/events")
public class EventController {

    @Autowired
    private EventService eventService;

    public List<EventEntity> getEvents() {
        return eventService.getAllEvents();
    }

    public Optional<EventEntity> getEventById(Long id) {
        return eventService.getEventById(id);
    }

    public EventEntity createEvent(EventEntity eventEntity) {
        return eventService.createEvent(eventEntity);
    }

    public EventEntity updateEvent(EventEntity eventEntity) {
        return eventService.updateEvent(eventEntity);
    }

    public void cancelEvent(Long id) {
        eventService.getEventById(id).get().setStatus(EventStatusEnum.CANCELED);
        eventService.updateEvent(eventService.getEventById(id).get());
    }
}
