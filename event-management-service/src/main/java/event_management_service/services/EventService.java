package event_management_service.services;

import event_management_service.entities.EventEntity;
import event_management_service.repositories.EventRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
public class EventService {
    @Autowired
    private EventRepository eventRepository;

    public List<EventEntity> getAllEvents() {
        return eventRepository.findAll();
    }

    public Optional<EventEntity> getEventById(Long id) {
        return eventRepository.findById(id);
    }

    public EventEntity createEvent(EventEntity eventEntity) {
        return eventRepository.save(eventEntity);
    }

    public EventEntity updateEvent(EventEntity eventEntity) {
        return eventRepository.save(eventEntity);
    }
}
